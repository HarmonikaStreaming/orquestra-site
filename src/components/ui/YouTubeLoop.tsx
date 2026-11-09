"use client";

// Vídeo do YouTube como "vídeo de fundo": autoplay em loop, mudo por padrão
// (exigência dos navegadores para autoplay), sem a barra de controles do
// YouTube e sem legendas, com um botão nosso para ligar/desligar o som. Os
// comandos vão por postMessage para o iframe (enablejsapi=1).
//
// - cover=false: o container tem 16:9 e o vídeo aparece inteiro.
// - cover=true: o iframe só COBRE o container (min 100% nos dois eixos),
//   recortando o mínimo necessário para não sobrar tarja preta.

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  videoId: string;
  title: string;
  cover?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function YouTubeLoop({ videoId, title, cover = false, className = "", style }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [comSom, setComSom] = useState(false);

  function comando(func: string, args: unknown[] = []) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  }

  // Desliga as legendas (inclusive as automáticas, que o YouTube liga para
  // quem tem "sempre mostrar legendas" na conta). O player demora a ficar
  // pronto, então repetimos algumas vezes depois do carregamento.
  function semLegenda() {
    comando("unloadModule", ["captions"]);
    comando("unloadModule", ["cc"]);
  }

  useEffect(() => {
    const timers = [1000, 2500, 5000, 9000].map((ms) => window.setTimeout(semLegenda, ms));
    return () => timers.forEach((t) => window.clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- só no carregamento
  }, []);

  function toggleSom() {
    if (comSom) {
      comando("mute");
    } else {
      comando("unMute");
      comando("setVolume", [100]);
      comando("playVideo"); // garante que está tocando ao ativar o som
      semLegenda();
    }
    setComSom((v) => !v);
  }

  const src =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videoId}` +
    `&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3` +
    `&cc_load_policy=0&enablejsapi=1`;

  const iframeStyle: CSSProperties = cover
    ? {
        border: 0,
        aspectRatio: "16 / 9",
        width: "auto",
        height: "auto",
        minWidth: "100%",
        minHeight: "100%",
        transform: "translate(-50%, -50%) scale(1.01)",
        transformOrigin: "center",
        pointerEvents: "none",
      }
    : { border: 0, pointerEvents: "none" };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-ol-border bg-black ${
        cover ? "" : "aspect-video"
      } ${className}`}
      style={style}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        onLoad={semLegenda}
        className={cover ? "absolute left-1/2 top-1/2" : "absolute inset-0 h-full w-full"}
        style={iframeStyle}
      />
      <button
        type="button"
        onClick={toggleSom}
        aria-label={comSom ? "Desativar som" : "Ativar som"}
        className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-black/80"
      >
        {comSom ? "🔊 Som ligado" : "🔇 Ativar som"}
      </button>
    </div>
  );
}
