const WA_LINK_PRODUCAO =
  "https://wa.me/5516981357031?text=Estou%20contratando%20a%20plataforma%20Orquestra%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20est%C3%BAdio%20e%20das%20transmiss%C3%B5es%20profissionais%20com%20equipe%20no%20local%20do%20meu%20evento.";
const WA_LINK_DUVIDA =
  "https://wa.me/5516981357031?text=Quero%20contratar%20a%20plataforma%20Orquestra%2C%20mas%20estou%20com%20uma%20d%C3%BAvida.";

export function Producao() {
  return (
    <section id="producao" className="section bg-ol-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="badge mx-auto">Adicione os serviços de uma produtora audiovisual ao evento</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            Utilize um de nossos estúdios ou leve uma{" "}
            <span className="text-gradient">estrutura profissional</span>
            {" "}até o local do seu evento.
          </h2>
          <p className="text-ol-slate max-w-2xl mx-auto">
            A Orquestra é uma plataforma poderosa — mas se você quiser transmitir
            com qualidade de broadcast, a{" "}
            <span className="text-white font-semibold">Harmonika Produtora</span>{" "}
            cuida de tudo pra você.
          </p>
        </div>

        {/* Two columns: video left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Video area */}
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-ol-border bg-ol-bg aspect-video">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ background: "linear-gradient(135deg, #0f1e3a 0%, #1a0b3a 100%)" }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-white ml-0.5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Showreel Harmonika Produtora</p>
              </div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src=""
              />
            </div>
            <p className="text-center text-xs text-ol-dim">Em breve: showreel de transmissões</p>
          </div>

          {/* Content right */}
          <div className="space-y-5">
            {/* Harmonika logo + link */}
            <div className="flex flex-col gap-3">
              <img
                src="/images/logo-harmonika.png"
                alt="Harmonika Produtora"
                style={{ height: "240px", width: "auto", objectFit: "contain" }}
              />
              <a
                href="https://www.harmonika.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ol-cyan hover:text-white transition-colors"
              >
                Conheça a Harmonika Produtora →
              </a>
            </div>

            {/* Operação completa card */}
            <div className="card-glass p-7 flex gap-5 items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "rgba(20,184,166,0.10)", border: "1px solid rgba(20,184,166,0.22)" }}
              >
                🎬
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-black text-white">Operação completa</h3>
                <p className="text-sm text-ol-slate leading-relaxed">
                  Equipe técnica da Harmonika, estúdio profissional ou estrutura montada no local do seu evento. Transmissão em qualquer lugar do Brasil.
                </p>
                <a
                  href={WA_LINK_DUVIDA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                >
                  Fale com a equipe da Harmonika
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK_PRODUCAO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com a equipe da Harmonika
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
