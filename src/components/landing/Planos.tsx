import { Check } from "lucide-react";

const plans = [
  {
    name: "Start",
    price: "99",
    period: "/mês",
    desc: "Para quem está começando a jornada.",
    features: ["Acesso à musculação", "Avaliação física inicial", "Horário comercial", "App de treinos"],
    cta: "Quero começar",
    highlight: false,
  },
  {
    name: "Performance",
    price: "149",
    period: "/mês",
    desc: "Nosso plano mais escolhido.",
    features: [
      "Acesso total à academia",
      "Todas as modalidades inclusas",
      "Acesso 24/7",
      "Acompanhamento mensal",
      "App + plano nutricional",
    ],
    cta: "Matricule-se",
    highlight: true,
  },
  {
    name: "Elite",
    price: "249",
    period: "/mês",
    desc: "Para quem quer o máximo.",
    features: [
      "Tudo do Performance",
      "Personal trainer 2x semana",
      "Sala VIP e vestiário privativo",
      "Recovery & massagem",
    ],
    cta: "Falar com consultor",
    highlight: false,
  },
];

export function Planos() {
  return (
    <section id="planos" className="relative bg-surface py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Planos
          </div>
          <h2 className="mt-4 text-display text-4xl text-white md:text-6xl">
            Invista em você.{" "}
            <span className="text-brand-red">Sem desculpas</span>.
          </h2>
          <p className="mt-5 text-white/60">
            Planos flexíveis para todos os perfis. Cancele quando quiser.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-2xl p-8 ring-1 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-to-br from-brand-red to-brand-red-hot ring-brand-red shadow-brand md:scale-105"
                  : "bg-surface-2 ring-white/10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Mais escolhido
                </div>
              )}
              <div className={`text-display text-2xl ${p.highlight ? "text-white" : "text-white"}`}>
                {p.name}
              </div>
              <p className={`mt-2 text-sm ${p.highlight ? "text-white/80" : "text-white/60"}`}>
                {p.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-sm ${p.highlight ? "text-white/80" : "text-white/60"}`}>R$</span>
                <span className="text-display text-6xl text-white">{p.price}</span>
                <span className={`${p.highlight ? "text-white/80" : "text-white/60"}`}>{p.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.highlight ? "text-white" : "text-brand-red"
                      }`}
                      strokeWidth={3}
                    />
                    <span className={p.highlight ? "text-white/90" : "text-white/75"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-10 inline-flex items-center justify-center rounded-md px-5 py-3.5 text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                  p.highlight
                    ? "bg-white text-brand-red hover:bg-white/90"
                    : "bg-brand-red text-white hover:bg-brand-red-hot"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
