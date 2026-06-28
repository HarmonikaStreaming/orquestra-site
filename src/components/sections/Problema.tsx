const PROBLEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.11 16.4A4.5 4.5 0 0112 14.5a4.5 4.5 0 013.89 1.9M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
      </svg>
    ),
    title: "Sem controle de acesso",
    body: "Com YouTube ou Zoom, qualquer pessoa com o link pode assistir. Você não sabe quem entrou, por quanto tempo ficou, ou se é quem disse ser.",
    highlight: "Acesso aberto = audiência que você não controla.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
      </svg>
    ),
    title: "Sem captura de leads",
    body: "Eventos no YouTube viram views. Você não captura nome, e-mail, WhatsApp ou qualquer dado de quem assistiu. O lead vai para o YouTube, não para você.",
    highlight: "Cada evento é dinheiro jogado fora.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
      </svg>
    ),
    title: "Sem identidade própria",
    body: "Zoom exibe o logotipo do Zoom. YouTube exibe anúncios. Seu evento fica encapsulado em uma plataforma genérica que comunica a marca deles, não a sua.",
    highlight: "Sua marca vale muito mais do que isso.",
  },
];

export function Problema() {
  return (
    <section id="problema" className="section bg-ol-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="badge mx-auto">O problema</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Por que YouTube, Zoom e Meeting{" "}
            <span className="text-gradient">não são suficientes?</span>
          </h2>
          <p className="text-ol-slate max-w-xl mx-auto">
            São plataformas para o público geral — mas não possuem amplo
            controle de acesso, segurança contra compartilhamento, página
            customizável, módulo de pagamento e captura de leads.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="card-glass p-8 space-y-4 group hover:border-red-500/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-sm text-ol-slate leading-relaxed">{p.body}</p>
              <p className="text-xs font-semibold text-white bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {p.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
