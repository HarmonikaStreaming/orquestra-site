const PILARES = [
  {
    color: "blue" as const,
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.12)",
    accentBorder: "rgba(37,99,235,0.28)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    tag: "Segurança",
    title: "Player blindado, sessão única",
    items: [
      "Player com restrição de compartilhamento",
      "DRM e marca d'água dinâmica",
      "Sessão única por dispositivo",
      "Bloqueio por inatividade configurável",
    ],
  },
  {
    color: "cyan" as const,
    accent: "#14B8A6",
    accentBg: "rgba(20,184,166,0.12)",
    accentBorder: "rgba(20,184,166,0.28)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag: "Controle",
    title: "Sua marca, suas regras",
    items: [
      "Branding white label completo",
      "8 modos de acesso configuráveis",
      "Formulários de captação conformes com LGPD",
      "Checkout integrado para eventos pagos",
    ],
  },
  {
    color: "purple" as const,
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.12)",
    accentBorder: "rgba(124,58,237,0.28)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tag: "Resultado",
    title: "Dados que geram decisões",
    items: [
      "Relatórios de presença e permanência",
      "Taxa de engajamento por seção",
      "Resultados de enquetes em tempo real",
      "Exportação CSV com todos os leads",
    ],
  },
];

export function Pilares() {
  return (
    <section id="solucao" className="section bg-ol-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="badge mx-auto">A solução</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Os 3 pilares da{" "}
            <span className="text-gradient">Orquestra Live</span>
          </h2>
          <p className="text-ol-slate max-w-xl mx-auto">
            Uma plataforma construída do zero para profissionais que precisam
            de controle total sobre seus eventos digitais.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILARES.map((p) => (
            <div
              key={p.tag}
              className="card-glass p-8 space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Accent line top */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl"
                style={{ background: p.accent }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: p.accentBg, border: `1px solid ${p.accentBorder}`, color: p.accent }}
              >
                {p.icon}
              </div>

              {/* Tag */}
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ background: p.accentBg, color: p.accent }}
              >
                {p.tag}
              </span>

              <h3 className="text-xl font-black text-white leading-snug">{p.title}</h3>

              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ol-slate">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0" style={{ color: p.accent }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
