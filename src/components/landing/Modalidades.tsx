import musc from "@/assets/mod-musculacao.jpg";
import cross from "@/assets/mod-crossfit.jpg";
import cardio from "@/assets/mod-cardio.jpg";
import func from "@/assets/mod-funcional.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: musc, title: "Musculação", tag: "Hipertrofia & Força", span: "lg:row-span-2" },
  { img: cross, title: "CrossTraining", tag: "Alta intensidade" },
  { img: cardio, title: "Cardio", tag: "Resistência" },
  { img: func, title: "Funcional", tag: "Mobilidade & Core", span: "lg:col-span-2" },
];

export function Modalidades() {
  return (
    <section id="modalidades" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
              Modalidades
            </div>
            <h2 className="mt-4 text-display text-4xl text-white md:text-6xl">
              Escolha sua arena.{" "}
              <span className="text-brand-blue">Domine seu jogo</span>.
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            De aulas explosivas a treinos de força. Mais de 15 modalidades comandadas por especialistas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
          {items.map((m, i) => (
            <article
              key={m.title}
              className={`reveal group relative overflow-hidden rounded-2xl bg-surface ring-1 ring-white/5 ${m.span ?? ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={m.img}
                alt={m.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
                  {m.tag}
                </div>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-display text-3xl text-white md:text-4xl">{m.title}</h3>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-red text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  Aulas guiadas por instrutores certificados, com planejamento progressivo.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
