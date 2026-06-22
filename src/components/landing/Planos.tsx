import { Check, Calendar, CalendarDays, Users, CalendarClock, Sun } from "lucide-react";

const mainPlan = {
  name: "Plano Mensal",
  price: "99,00",
  period: "/mês",
  desc: "Nosso plano padrão. Acesso livre durante todos os dias e horários de funcionamento.",
  features: [
    "Acesso à musculação",
    "Auxílio dos instrutores no salão",
    "Desconto para pagamento à vista: R$ 95,00/mês",
  ],
  cta: "Matricule-se",
};

const otherPlans = [
  {
    icon: CalendarDays,
    name: "Plano Trimestral",
    price: "R$ 270,00",
    desc: "R$ 260,00/mês em pagamento à vista. Economize e treine sem preocupações por 3 meses.",
  },
  {
    icon: Calendar,
    name: "3x na Semana",
    price: "R$ 85,00",
    desc: "Para quem treina dias alternados.",
  },
  {
    icon: Users,
    name: "Plano Casal",
    price: "R$ 180,00",
    desc: "R$ 170,00/mês em pagamento à vista. Duas matrículas, valor reduzido.",
  },
  {
    icon: CalendarClock,
    name: "Plano Semanal",
    price: "R$ 50,00",
    desc: "Acesso liberado por 5 dias.",
  },
  {
    icon: Sun,
    name: "Diária",
    price: "R$ 20,00",
    desc: "Treine por um dia sem compromisso.",
  },
];

export function Planos() {
  return (
    <section id="planos" className="relative bg-surface py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Planos & Mensalidades
          </div>
          <h2 className="mt-4 text-display text-4xl text-white md:text-6xl">
            Preço justo.{" "}
            <span className="text-brand-red">Treino de verdade</span>.
          </h2>
          <p className="mt-5 text-white/60">
            Escolha o formato que se encaixa na sua rotina e comece hoje mesmo.
          </p>
        </div>

        {/* Destaque do plano mensal */}
        {/* Destaque do plano mensal */}
        <div className="reveal mt-16 mx-auto max-w-2xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-red to-brand-red-hot p-8 md:p-10 ring-1 ring-brand-red shadow-brand">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              Mais escolhido
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* COLUNA 1: Textos e Preços */}
              <div>
                <div className="text-display text-3xl text-white">{mainPlan.name}</div>
                <p className="mt-2 text-sm text-white/85">{mainPlan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-base text-white/80">R$</span>
                  <span className="text-display text-6xl text-white md:text-7xl">{mainPlan.price}</span>
                  <span className="text-white/80">{mainPlan.period}</span>
                </div>
              </div>

              {/* COLUNA 2: Lista de Vantagens e Botão */}
              <div className="flex flex-col md:border-l md:border-white/20 md:pl-8">
                <ul className="space-y-3">
                  {mainPlan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/95">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botão alinhado à direita */}
                <div className="mt-8 flex md:justify-center">
                  <a
                    href="https://wa.me/5518991236821?text=Ol%C3%A1%2C%20gostaria%20de%20me%20matricular%20na%20Academia%20Perfformance%21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-brand-red transition-all hover:scale-105 hover:bg-white/90 md:w-auto"
                  >
                    {mainPlan.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outras opções */}
        <div className="reveal mt-16">
          <h3 className="text-display text-2xl text-white md:text-3xl">
            Outras opções <span className="text-brand-blue">disponíveis</span>
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Formatos alternativos para quem precisa de mais flexibilidade.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherPlans.map((p, i) => (
              <div
                key={p.name}
                className="reveal group flex items-start gap-4 rounded-2xl bg-surface-2 p-6 ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:ring-brand-red/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red ring-1 ring-brand-red/30 transition-all group-hover:bg-brand-red group-hover:text-white">
                  <p.icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="text-display text-lg text-white">{p.name}</div>
                    <div className="text-display text-lg text-brand-red whitespace-nowrap">
                      {p.price}
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-white/60">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-white/40">
            Obtenha mais informações atualizados entrando em contato.
          </p>
        </div>
      </div>
    </section>
  );
}
