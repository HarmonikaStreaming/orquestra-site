"use client";

import { useState } from "react";

type Ciclo = "mensal" | "anual";

const PLANOS = [
  {
    id: "solo",
    name: "Solo",
    desc: "Para profissionais que estão começando com eventos digitais.",
    precoMensal: 197,
    precoAnual: 158,
    popular: false,
    cor: "#2563EB",
    items: [
      "3 eventos por mês",
      "Até 500 participantes / evento",
      "Todos os modos de acesso",
      "Chat, enquetes e reações",
      "Relatórios com exportação CSV",
      "Suporte por e-mail",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    desc: "Para profissionais e agências com volume maior de eventos.",
    precoMensal: 497,
    precoAnual: 398,
    popular: true,
    cor: "#7C3AED",
    items: [
      "10 eventos por mês",
      "Até 2.000 participantes / evento",
      "White label completo",
      "Pagamentos integrados (MP)",
      "Emails automáticos (Resend)",
      "Suporte prioritário via WhatsApp",
      "Multi-usuário (3 operadores)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    desc: "Para empresas e instituições com demanda recorrente e alta.",
    precoMensal: 1500,
    precoAnual: 1200,
    popular: false,
    cor: "#14B8A6",
    items: [
      "Eventos ilimitados",
      "Participantes ilimitados",
      "SLA e suporte dedicado",
      "Usuários ilimitados",
      "Integração API / Webhook",
      "Onboarding personalizado",
      "Servidor dedicado sob demanda",
    ],
  },
];

function fmt(n: number) {
  return n.toLocaleString("pt-BR");
}

export function Planos() {
  const [ciclo, setCiclo] = useState<Ciclo>("mensal");

  return (
    <section id="planos" className="section bg-ol-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="badge mx-auto">Planos e preços</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Invista no{" "}
            <span className="text-gradient">crescimento do seu evento</span>
          </h2>
          <p className="text-ol-slate max-w-xl mx-auto">
            Sem taxa de setup. Cancele quando quiser. Preços em Reais.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setCiclo("mensal")}
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                ciclo === "mensal"
                  ? "bg-ol-blue text-white"
                  : "text-ol-slate hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setCiclo("anual")}
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                ciclo === "anual"
                  ? "bg-ol-purple text-white"
                  : "text-ol-slate hover:text-white"
              }`}
            >
              Anual
              <span className="text-xs font-bold bg-ol-orange/20 text-ol-orange border border-ol-orange/30 rounded-full px-2 py-0.5">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {PLANOS.map((p) => {
            const preco = ciclo === "mensal" ? p.precoMensal : p.precoAnual;
            return (
              <div
                key={p.id}
                className={`card-glass p-8 space-y-6 relative flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                  p.popular ? "ring-2 ring-ol-purple" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white"
                    style={{ background: "var(--grd-cta)" }}>
                    ⭐ Mais popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-sm text-ol-slate mt-1">{p.desc}</p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-sm text-ol-slate self-start mt-2">R$</span>
                  <span className="text-4xl font-black text-white">{fmt(preco)}</span>
                  <span className="text-sm text-ol-slate mb-1">/mês</span>
                </div>
                {ciclo === "anual" && (
                  <p className="text-xs text-ol-cyan -mt-4">
                    Cobrado anualmente · R${fmt(preco * 12)}/ano
                  </p>
                )}

                <ul className="space-y-3 flex-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ol-slate">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0" style={{ color: p.cor }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/checkout"
                  className={`block text-center px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                    p.popular
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                >
                  Contratar {p.name}
                </a>
              </div>
            );
          })}
        </div>

        {/* Card avulso */}
        <div className="card-glass p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-ol-orange/10 border border-ol-orange/25 flex items-center justify-center text-ol-orange shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-black text-white">Evento Avulso</h3>
              <p className="text-sm text-ol-slate mt-0.5">
                Precisa de apenas um evento? Contrate de forma avulsa, sem mensalidade.
                Até 1.000 participantes, todos os recursos inclusos.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="text-2xl font-black text-white">R$ 297</div>
              <div className="text-xs text-ol-slate">por evento</div>
            </div>
            <a href="/checkout" className="btn-outline px-5 py-2.5 text-sm whitespace-nowrap">
              Contratar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
