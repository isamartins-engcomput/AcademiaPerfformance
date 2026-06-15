import { Dumbbell, Snowflake, Users, Zap, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Premium",
    desc: "Maquinário de última geração de marcas líderes mundiais para cada grupo muscular.",
  },
  {
    icon: Snowflake,
    title: "Ambiente Climatizado",
    desc: "Ar-condicionado em todo o espaço para você treinar com conforto absoluto, todos os dias.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    desc: "Equipe técnica certificada acompanhando cada série, evolução e detalhe do seu treino.",
  },
  {
    icon: Zap,
    title: "Treinos de Alta Intensidade",
    desc: "Metodologias comprovadas para maximizar resultados em menos tempo de execução.",
  },
  {
    icon: Clock,
    title: "Horário Estendido",
    desc: "Aberto das 5h às 23h durante a semana. Treine no seu ritmo, na sua hora.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    desc: "Espaço monitorado, vestiários privativos e protocolos de higiene rigorosos.",
  },
];

export function Features() {
  return (
    <section id="estrutura" className="relative bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal max-w-2xl">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Por que Perfformance
          </div>
          <h2 className="mt-4 text-display text-4xl text-white md:text-6xl">
            Tudo que você precisa para{" "}
            <span className="text-brand-red">evoluir</span>.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Nós cuidamos da estrutura. Você cuida da intensidade.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative bg-surface-2 p-8 transition-colors hover:bg-surface"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red ring-1 ring-brand-red/30 transition-all group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                <f.icon className="h-7 w-7" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 text-display text-2xl text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-brand-red to-brand-blue transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
