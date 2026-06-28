export function CTAFinal() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden py-24 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.15) 40%, transparent 70%), #0B1320",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{ background: "var(--grd-main)" }}
      />

      <div className="mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
          Pronto para o seu{" "}
          <span className="text-gradient">primeiro evento?</span>
        </h2>

        <p className="text-lg text-ol-slate max-w-lg mx-auto leading-relaxed">
          Configure em minutos e transmita com a qualidade que o seu
          público merece. Sem complicação, sem dependência de TI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#planos"
            className="btn-primary px-10 py-4 text-base rounded-xl"
            style={{ fontSize: "1rem" }}
          >
            Começar agora
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="mailto:ola@orquestralive.com.br"
            className="btn-outline px-10 py-4 text-base rounded-xl"
          >
            Falar com a equipe
          </a>
        </div>

        <p className="text-xs text-ol-dim">
          Sem cartão de crédito para começar · Suporte em português · Dados hospedados no Brasil
        </p>
      </div>
    </section>
  );
}
