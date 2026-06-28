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
          <div className="badge animate-fade-up mt-3">
            <span className="animate-pulse-live w-1.5 h-1.5 rounded-full bg-ol-cyan inline-block" />
            Plataforma de Eventos Digitais
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
            <a href="#demo" className="btn-outline px-8 py-3.5 text-base rounded-lg">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Ver demonstração
            </a>
          </div>

        </div>

        {/* Platform mockup */}
        <div className="animate-fade-up delay-200 animate-float hidden lg:block">
          <PlatformMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-ol-slate">Role para baixo</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-ol-slate animate-bounce">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function PlatformMockup() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-ol-blue/20 border border-ol-border bg-ol-surface max-w-lg mx-auto">
      {/* Title bar */}
      <div className="flex items-center justify-between bg-ol-muted px-4 py-3 border-b border-ol-border">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-bold text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-live" />
            AO VIVO
          </span>
          <span className="text-xs text-ol-slate truncate">Congresso Internacional de Cardiologia 2026</span>
        </div>
        <span className="text-xs text-ol-dim flex items-center gap-1">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          1.847
        </span>
      </div>

      {/* Main content */}
      <div className="flex h-56">
        {/* Video area */}
        <div
          className="flex-1 flex items-center justify-center relative"
          style={{ background: "linear-gradient(135deg, #0f1e3a 0%, #1a0b3a 100%)" }}
        >
          <div className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse at center, #2563EB33, transparent 70%)" }}
          />
          {/* Play button */}
          <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white ml-0.5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Speaker label */}
          <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur rounded px-2 py-1">
            <p className="text-[10px] text-white font-medium">Dr. Ricardo Alves</p>
            <p className="text-[9px] text-ol-slate">Cardiologista Intervencionista</p>
          </div>
        </div>

        {/* Chat sidebar */}
        <div className="w-40 border-l border-ol-border flex flex-col bg-ol-bg/80">
          <div className="px-3 py-2 border-b border-ol-border">
            <p className="text-[10px] font-semibold text-ol-slate uppercase tracking-wide">Chat ao Vivo</p>
          </div>
          <div className="flex-1 overflow-hidden p-2 space-y-2">
            {[
              { user: "Ana M.", msg: "Excelente palestra!", color: "text-blue-400" },
              { user: "João P.", msg: "👏 Parabéns!", color: "text-purple-400" },
              { user: "Carla S.", msg: "Qual a dose recomendada?", color: "text-cyan-400" },
              { user: "Pedro L.", msg: "Muito didático!", color: "text-green-400" },
            ].map((c, i) => (
              <div key={i} className="text-[9px]">
                <span className={`font-bold ${c.color}`}>{c.user}</span>
                <span className="text-ol-slate ml-1">{c.msg}</span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-ol-border">
            <div className="bg-ol-muted rounded px-2 py-1 text-[9px] text-ol-dim">
              Digite uma mensagem…
            </div>
          </div>
        </div>
      </div>

      {/* Controls bar */}
      <div className="flex items-center gap-3 bg-ol-muted px-4 py-3 border-t border-ol-border">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-ol-slate shrink-0">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
        {/* Progress bar */}
        <div className="flex-1 h-1 rounded-full bg-ol-border relative">
          <div className="absolute inset-y-0 left-0 w-2/5 rounded-full"
            style={{ background: "var(--grd-cta)" }} />
          <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow" />
        </div>
        <span className="text-[10px] text-ol-slate shrink-0">1:23:45</span>
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-ol-slate shrink-0">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Poll overlay */}
      <div className="absolute bottom-20 left-3 right-44 bg-ol-surface/90 backdrop-blur rounded-xl border border-ol-border p-3 shadow-xl">
        <p className="text-[10px] font-semibold text-ol-slate mb-2">📊 Enquete ao vivo</p>
        <p className="text-[11px] text-white font-medium mb-2">Qual tratamento você indicaria?</p>
        {[
          { label: "Ablação", pct: 58 },
          { label: "Medicação", pct: 32 },
        ].map((opt) => (
          <div key={opt.label} className="mb-1.5">
            <div className="flex justify-between text-[9px] text-ol-slate mb-0.5">
              <span>{opt.label}</span><span>{opt.pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-ol-border">
              <div className="h-full rounded-full" style={{ width: `${opt.pct}%`, background: "var(--grd-cta)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
