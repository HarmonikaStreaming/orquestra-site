const FEATURES = [
  {
    color: "#2563EB",
    bg: "rgba(37,99,235,0.12)",
    border: "rgba(37,99,235,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Chat ao Vivo",
    desc: "Interação em tempo real com moderação. Mensagens instantâneas, menções e reações durante a transmissão.",
  },
  {
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.12)",
    border: "rgba(20,184,166,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Enquetes Interativas",
    desc: "Lance perguntas durante a transmissão e veja os resultados em tempo real. Ideal para votações e testes de conhecimento.",
  },
  {
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Reações ao Vivo",
    desc: "Participantes expressam engajamento com reações de emoji que flutuam na tela em tempo real, criando atmosfera de evento.",
  },
  {
    color: "#FF8A3D",
    bg: "rgba(255,138,61,0.12)",
    border: "rgba(255,138,61,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Relatórios Detalhados",
    desc: "Presença, tempo médio assistido, pico de audiência, engajamento por seção e resultados de enquetes. Tudo exportável em CSV.",
  },
  {
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.12)",
    border: "rgba(20,184,166,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pagamentos Online",
    desc: "Checkout integrado com Mercado Pago. Aceite Pix, cartão de crédito e boleto. Confirmação automática e liberação de acesso.",
  },
  {
    color: "#2563EB",
    bg: "rgba(37,99,235,0.12)",
    border: "rgba(37,99,235,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Emails Automáticos",
    desc: "Confirmação de cadastro, lembrete 24h antes e no dia do evento. Personalizados com a sua marca, enviados automaticamente.",
  },
];

export function Funcionalidades() {
  return (
    <section id="funcionalidades" className="section bg-ol-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="badge mx-auto">Recursos</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Tudo que seu evento precisa,{" "}
            <span className="text-gradient">em um só lugar</span>
          </h2>
          <p className="text-ol-slate max-w-xl mx-auto">
            Ferramentas profissionais de engajamento, controle e análise prontas
            para usar desde o primeiro evento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-glass p-6 space-y-4 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-white">{f.title}</h3>
              <p className="text-sm text-ol-slate leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
