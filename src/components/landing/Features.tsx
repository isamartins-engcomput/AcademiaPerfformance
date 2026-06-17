import { Dumbbell, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Essenciais",
    desc: "Equipamentos básicos e essenciais para o seu treino de musculação.",
  },
  {
    icon: HeartHandshake,
    title: "Auxílio no Salão",
    desc: "Instrutores no salão para te auxiliar durante o treino, tirar dúvidas e ajustar a execução.",
  },
  {
    icon: Users,
    title: "Academia de Bairro",
    desc: "Ambiente simples e focado no que importa: a musculação. Sem frescura, com a vizinhança treinando junto.",
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
            Academia honesta para{" "}
            <span className="text-brand-red">treinar de verdade</span>.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Sem promessas vazias. O básico bem-feito para você focar na musculação.
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
