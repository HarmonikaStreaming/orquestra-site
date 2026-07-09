const ACADEMY_URL =
  process.env.NEXT_PUBLIC_ACADEMY_URL || "https://orquestra-academy-site.vercel.app";

const ACADEMY_GRADIENT = "linear-gradient(135deg, #FFAD00 0%, #FA4D00 100%)";

export function OrquestraAcademy() {
  return (
    <section id="academy" className="section bg-ol-bg">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="card-glass rounded-2xl p-8 sm:p-12 text-center space-y-6"
          style={{ border: "1px solid rgba(255,173,0,0.25)" }}
        >
          <div
            className="badge mx-auto"
            style={{ border: "1px solid rgba(255,173,0,0.35)", background: "rgba(255,173,0,0.12)", color: "#FFAD00" }}
          >
            Novidade
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            Leve seu conteúdo para uma{" "}
            <span
              style={{
                background: ACADEMY_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              plataforma própria de educação continuada
            </span>
          </h2>

          <p className="text-ol-slate max-w-2xl mx-auto">
            A Orquestra Academy transforma cursos, trilhas e videoaulas em uma plataforma com a
            sua marca, certificação automática e dados de engajamento.
          </p>

          <a
            href={ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: ACADEMY_GRADIENT }}
          >
            Conhecer a Orquestra Academy
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
