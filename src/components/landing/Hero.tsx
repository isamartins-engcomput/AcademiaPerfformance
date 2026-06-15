import heroImg from "@/assets/hero-gym.jpg";
import { ArrowRight, Dumbbell } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-diamond-plate">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-32 pb-20 md:px-8">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <Dumbbell className="h-3.5 w-3.5" />
            Treine com propósito
          </div>

          <h1 className="mt-6 text-display text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            A sua melhor{" "}
            <span className="bg-gradient-to-r from-brand-red via-brand-red-hot to-brand-blue bg-clip-text text-transparent">
              perfformance&nbsp;
            </span>{" "}
            começa aqui.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Estrutura de ponta, equipe especialista e a energia que você precisa
            para romper seus limites. Bem-vindo à Academia Perfformance.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#planos"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-brand transition-all hover:bg-brand-red-hot hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#estrutura"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand-blue/70 bg-brand-blue/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-brand-blue transition-all hover:bg-brand-blue/15 hover:scale-105"
            >
              Conheça a Estrutura
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { v: "+2.500", l: "Alunos ativos" },
              { v: "+15", l: "Modalidades" },
              { v: "24/7", l: "Acesso premium" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-display text-3xl text-white md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
