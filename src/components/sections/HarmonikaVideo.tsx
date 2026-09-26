"use client";

// Showreel da Harmonika (YouTube) — autoplay em loop, mudo por padrão (exigência
// dos navegadores p/ autoplay) e com botão para ativar/desativar o som. Sem a
// barra de controles do YouTube, para um visual limpo de vídeo de fundo; o
// controle de som é nosso, via postMessage para o iframe (enablejsapi=1).

import { useRef, useState } from "react";

const VIDEO_ID = "aJK1QoKl6b8";

export function HarmonikaVideo() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [comSom, setComSom] = useState(false);

  function toggleSom() {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const cmd = comSom ? "mute" : "unMute";
    win.postMessage(JSON.stringify({ event: "command", func: cmd, args: [] }), "*");
    // garante que está tocando ao ativar o som
    if (!comSom) win.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
    setComSom((v) => !v);
  }

  const src =
    `https://www.youtube.com/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
    `&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&enablejsapi=1`;

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-ol-border bg-black flex-1 min-h-52"
      style={{ minHeight: "280px" }}
    >
      {/* O iframe mantém 16:9 e apenas COBRE o container (min 100% em ambos os
          eixos) — elimina as tarjas pretas recortando só o mínimo necessário,
          preservando o enquadramento do vídeo. */}
      <iframe
        ref={iframeRef}
        src={src}
        title="Showreel Harmonika Produtora"
        allow="autoplay; encrypted-media; picture-in-picture"
        className="absolute left-1/2 top-1/2"
        style={{
          border: 0,
          aspectRatio: "16 / 9",
          width: "auto",
          height: "auto",
          minWidth: "100%",
          minHeight: "100%",
          transform: "translate(-50%, -50%) scale(1.01)",
          transformOrigin: "center",
          pointerEvents: "none",
        }}
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
