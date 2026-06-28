const CASOS = [
  {
    emoji: "🩺",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.10)",
    border: "rgba(37,99,235,0.22)",
    persona: "Médico / Especialista",
    tag: "Saúde",
    desc: "Congressos científicos, atualização médica continuada e simpósios com controle de acesso por número de registro profissional (CFM, CRM, CRO).",
    bullets: [
      "Acesso por registro profissional (CRM/CFM)",
      "Certificado de participação automático",
      "Relatório de presença para credenciamento",
    ],
  },
  {
    emoji: "⚖️",
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.10)",
    border: "rgba(20,184,166,0.22)",
    persona: "Advogado / OAB",
    tag: "Jurídico",
    desc: "Webinars jurídicos, eventos da OAB e treinamentos com aproveitamento de carga horária. Controle de acesso por número de inscrição na OAB.",
    bullets: [
      "Acesso por inscrição OAB",
      "Controle de permanência para carga horária",
      "Formulário de feedback pós-evento",
    ],
  },
  {
    emoji: "🚀",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.10)",
    border: "rgba(124,58,237,0.22)",
    persona: "Coach / Infoprodutor",
    tag: "Digital",
    desc: "Lançamentos digitais, mentorias ao vivo e webinars de vendas com captura de leads qualificados, checkout integrado e follow-up automático.",
    bullets: [
      "Checkout Mercado Pago integrado",
      "Captura de leads com formulário LGPD",
      "Sequência de emails automática pós-evento",
    ],
  },
  {
    emoji: "🏢",
    color: "#FF8A3D",
    bg: "rgba(255,138,61,0.10)",
    border: "rgba(255,138,61,0.22)",
    persona: "Empresa / RH",
    tag: "Corporativo",
    desc: "Treinamentos corporativos, townhalls, comunicados internos e onboarding com controle de presença, NPS integrado e relatório para gestores.",
    bullets: [
      "Acesso restrito por matrícula ou e-mail",
      "NPS e pesquisa de satisfação pós-evento",
      "Dashboard de presença para gestores",
    ],
  },
];

export function CasosDeUso() {
  return (
    <section id="casos-de-uso" className="section bg-ol-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="badge mx-auto">Casos de uso</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Para quem a{" "}
            <span className="text-gradient">Orquestra Live</span>
            {" "}foi feita?
          </h2>
          <p className="text-ol-slate max-w-xl mx-auto">
            Da saúde ao corporate, a plataforma se adapta ao seu contexto com
            modos de acesso e configurações específicas para cada segmento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CASOS.map((c) => (
            <div
              key={c.persona}
              className="card-glass p-8 space-y-5 hover:-translate-y-1 transition-transform duration-300"
              style={{ borderTopColor: c.color }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  {c.emoji}
                </div>
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{ background: c.bg, color: c.color }}
                  >
                    {c.tag}
                  </span>
                  <h3 className="text-lg font-black text-white mt-1">{c.persona}</h3>
                </div>
              </div>

              <p className="text-sm text-ol-slate leading-relaxed">{c.desc}</p>

              <ul className="space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ol-slate">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0" style={{ color: c.color }}>
                      <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" clipRule="evenodd" />
                    </svg>
                    {b}
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
