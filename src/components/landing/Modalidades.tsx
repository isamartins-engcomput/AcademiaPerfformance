import muscImg from "@/assets/musculacao-hero.jpg";
import { Dumbbell, Users, Weight } from "lucide-react";

const highlights = [
  {
    icon: Weight,
    title: "Peso Livre",
    desc: "Halteres, anilhas e barras para os treinos clássicos de musculação.",
  },
  {
    icon: Dumbbell,
    title: "Maquinário Essencial",
    desc: "Equipamentos básicos para trabalhar os principais grupos musculares.",
  },
  {
    icon: Users,
    title: "Auxílio no Salão",
    desc: "Instrutores no salão para te ajudar durante o treino, sempre que precisar.",
  },
];

export function Modalidades() {
  return (
    <section id="modalidade" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal max-w-2xl">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Modalidade
          </div>
          <h2 className="mt-4 text-display text-4xl text-white md:text-6xl">
            Musculação.{" "}
            <span className="text-brand-blue">Pura e simples</span>.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Aqui não tem enrolação. O foco é um só: peso livre, maquinário e a sua evolução.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="reveal group relative overflow-hidden rounded-2xl ring-1 ring-white/5 lg:col-span-3 min-h-[420px]">
            <img
              src={muscImg}
              alt="Sala de musculação com peso livre e maquinário"
              width={1920}
              height={1080}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
                Peso livre · Maquinário · Treino
              </div>
              <h3 className="mt-3 text-display text-4xl text-white md:text-5xl">
                Musculação
              </h3>
              <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">
                Ambiente simples e focado no que importa: a musculação. Treine
                no seu ritmo, com o auxílio dos instrutores no salão.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-2">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="reveal group flex gap-5 rounded-2xl bg-surface-2 p-6 ring-1 ring-white/5 transition-colors hover:bg-surface"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red ring-1 ring-brand-red/30 transition-all group-hover:bg-brand-red group-hover:text-white">
                  <h.icon className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <div>
                  <h4 className="text-display text-xl text-white">{h.title}</h4>
                  <p className="mt-1.5 text-sm text-white/60">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
