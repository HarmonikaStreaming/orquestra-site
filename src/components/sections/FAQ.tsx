"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "A plataforma funciona com qualquer serviço de transmissão?",
    a: "Sim. A Orquestra Live é compatível com qualquer URL de vídeo: YouTube (oculto ou privado), Vimeo, Mux, AWS Media, Zoom, e qualquer serviço que gere um embed ou URL HLS. Você configura o link de transmissão no painel e a plataforma exibe dentro do player protegido.",
  },
  {
    q: "Como funciona o controle de acesso?",
    a: "Você escolhe um dos 8 modos disponíveis: e-mail simples, e-mail + senha, CPF, matrícula, registro profissional (CRM, OAB, etc.), código de convite, cadastro básico ou cadastro completo. Cada modo exige a credencial correspondente para acessar a transmissão. Participantes não autorizados veem apenas a tela de login.",
  },
  {
    q: "Posso usar minha própria marca (white label)?",
    a: "Completamente. Você configura nome do evento, paleta de cores, logo e domínio personalizado. Seus participantes veem o seu nome, não o nome da Orquestra Live. É como ter uma plataforma própria, sem o custo de desenvolvimento.",
  },
  {
    q: "Como é feito o pagamento dos participantes?",
    a: "Integramos com o Mercado Pago. Você ativa o pagamento, configura o valor em reais e escolhe os métodos aceitos: Pix, cartão de crédito (até 12x) ou boleto. Quando o pagamento é confirmado, o acesso é liberado automaticamente e o participante recebe o email de confirmação.",
  },
  {
    q: "Os dados dos participantes são meus?",
    a: "Sim, 100%. Todos os dados coletados — nome, e-mail, telefone, registros profissionais, respostas de formulários — pertencem a você. Você pode exportar o CSV completo a qualquer momento. A Orquestra Live não utiliza esses dados para nenhuma outra finalidade.",
  },
  {
    q: "Como faço para testar antes de contratar?",
    a: "Entre em contato pelo nosso WhatsApp ou e-mail. Oferecemos uma demonstração guiada da plataforma e um evento de teste para você configurar do zero e ver como funciona antes de qualquer compromisso financeiro.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-ol-bg">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="badge mx-auto">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Perguntas{" "}
            <span className="text-gradient">frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`card-glass overflow-hidden transition-all duration-200 ${
                open === i ? "border-ol-blue/40" : "hover:border-white/12"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-white leading-snug">
                  {faq.q}
                </span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 text-ol-slate shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-ol-blue" : ""
                  }`}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-ol-slate leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-ol-dim mt-10">
          Ainda tem dúvidas?{" "}
          <a
            href="mailto:ola@orquestralive.com.br"
            className="text-ol-blue hover:underline font-medium"
          >
            Entre em contato
          </a>
          .
        </p>
      </div>
    </section>
  );
}
