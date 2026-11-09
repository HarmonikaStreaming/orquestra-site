import Link from "next/link";
import { YouTubeLoop } from "@/components/ui/YouTubeLoop";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
      style={{ background: "var(--grd-hero)" }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left space-y-6">
          <div className="animate-fade-up mt-3 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="badge">
              <span className="animate-pulse-live w-1.5 h-1.5 rounded-full bg-ol-cyan inline-block" />
              Plataforma de Eventos Digitais
            </div>
            <Link href="/academy" className="badge transition hover:opacity-80">
              Plataforma Academy
            </Link>
          </div>

          <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
            Seu evento online em{" "}
            <span className="text-gradient">perfeita sintonia.</span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg text-ol-slate leading-relaxed max-w-lg mx-auto lg:mx-0">
            Plataforma de streaming personalizável para eventos corporativos
            e lançamentos digitais. Controle de acesso, captura de leads,
            módulo de pagamento, relatórios completos e muito mais.
          </p>

          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#planos" className="btn-primary px-8 py-3.5 text-base rounded-lg">
              Começar agora
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://wa.me/5516981357031?text=Ol%C3%A1!%20Quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Orquestra%20Live."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-3.5 text-base rounded-lg"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Agendar demonstração
            </a>
          </div>

        </div>

        {/* VT da Orquestra Live — loop, sem legenda, com botão de som */}
        <div className="animate-fade-up delay-200 w-full max-w-2xl mx-auto">
          <YouTubeLoop
            videoId="nvRONi2BjeA"
            title="Orquestra Live — vídeo de apresentação"
            className="shadow-2xl shadow-ol-blue/20"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-ol-slate">Role para baixo</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-ol-slate animate-bounce">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
