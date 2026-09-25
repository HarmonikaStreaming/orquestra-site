"use client";

// Banner de cookies + GA4 gated por consentimento (LGPD).
// O Google Analytics só é carregado DEPOIS que a pessoa clica em "Aceitar".
// A escolha (aceito/recusado) fica no localStorage; recusar = nenhum
// rastreamento não essencial. O ID do GA4 vem de NEXT_PUBLIC_GA_ID.

import { useEffect, useState } from "react";

// ID de métrica do GA4 (público — aparece no HTML de qualquer forma). Pode
// ser sobrescrito por NEXT_PUBLIC_GA_ID na Vercel.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-5F65JY7R0R";
const STORAGE_KEY = "ol-cookie-consent"; // "accepted" | "declined"

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function carregarGA() {
  if (!GA_ID || document.getElementById("ga4-src")) return;
  const s = document.createElement("script");
  s.id = "ga4-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function gtag() { window.dataLayer!.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export function CookieConsent() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    let escolha: string | null = null;
    try {
      escolha = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* navegador bloqueando storage — trata como sem escolha */
    }
    if (escolha === "accepted") {
      carregarGA();
    } else if (escolha !== "declined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAberto(true);
    }
  }, []);

  function decidir(valor: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, valor);
    } catch {
      /* ignora */
    }
    if (valor === "accepted") carregarGA();
    setAberto(false);
  }

  if (!aberto) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-xl border border-white/10 bg-[#0f1b2e]/95 p-4 shadow-2xl backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-4 sm:p-5"
    >
      <p className="text-sm leading-relaxed text-zinc-300">
        Usamos cookies para entender como o site é usado e melhorar sua experiência. Os cookies de
        análise só são ativados com o seu consentimento.{" "}
        <a
          href="https://app.orquestralive.com.br/legal/privacidade"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white"
        >
          Política de privacidade
        </a>
        .
      </p>
      <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
        <button
          type="button"
          onClick={() => decidir("declined")}
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-white/40 hover:text-white"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => decidir("accepted")}
          className="rounded-lg bg-ol-cyan px-4 py-2 text-sm font-semibold text-[#0B1320] transition hover:opacity-90"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
