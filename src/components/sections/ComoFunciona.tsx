const STEPS = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "Cria o evento",
    desc: "Configure título, data, modo de acesso e personalize com a identidade visual da sua marca em minutos.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Configura",
    desc: "Cole o link de transmissão (YouTube, Vimeo, Mux), ative enquetes, formulários e configure o acesso dos participantes.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "Transmite",
    desc: "Compartilhe o link com seus participantes cadastrados. Eles acessam pelo navegador, sem instalar nada, com a sua marca.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: "Exporta os leads",
    desc: "Baixe o CSV completo com dados de presença, tempo médio assistido, respostas de enquetes e informações de todos os participantes.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="section bg-ol-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="badge mx-auto">Processo</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Configure seu evento em{" "}
            <span className="text-gradient">4 passos</span>
          </h2>
          <p className="text-ol-slate max-w-xl mx-auto">
            Do cadastro ao primeiro evento ao vivo em menos de 30 minutos.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-10 left-[calc(12.5%+1.75rem)] right-[calc(12.5%+1.75rem)] h-px"
            style={{ background: "linear-gradient(90deg, rgba(37,99,235,0.6), rgba(124,58,237,0.6), rgba(255,138,61,0.4))" }}
          />

          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center space-y-4 relative">
              {/* Circle */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 text-white shrink-0"
                style={{
                  background: "var(--ol-surface, #111B2E)",
                  borderColor: i === 0 ? "#2563EB" : i === 1 ? "#14B8A6" : i === 2 ? "#7C3AED" : "#FF8A3D",
                  boxShadow: `0 0 20px ${i === 0 ? "rgba(37,99,235,0.3)" : i === 1 ? "rgba(20,184,166,0.3)" : i === 2 ? "rgba(124,58,237,0.3)" : "rgba(255,138,61,0.3)"}`,
                  color: i === 0 ? "#2563EB" : i === 1 ? "#14B8A6" : i === 2 ? "#7C3AED" : "#FF8A3D",
                }}
              >
                {step.icon}
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-white"
                  style={{ background: i === 0 ? "#2563EB" : i === 1 ? "#14B8A6" : i === 2 ? "#7C3AED" : "#FF8A3D" }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-sm text-ol-slate leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
