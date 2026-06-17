import { Clock, Sun, Moon } from "lucide-react";

const schedule = [
  {
    day: "Segunda a Sexta",
    slots: ["06:00 — 10:00", "15:00 — 21:00"],
    icon: Clock,
    open: true,
  },
  {
    day: "Sábado",
    slots: ["10:00 — 12:00"],
    icon: Sun,
    open: true,
  },
  {
    day: "Domingo",
    slots: ["Fechado"],
    icon: Moon,
    open: false,
  },
];

export function Horarios() {
  return (
    <section id="horarios" className="relative bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal max-w-2xl">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Horário de Funcionamento
          </div>
          <h2 className="mt-4 text-display text-4xl text-white md:text-6xl">
            Treine quando faz{" "}
            <span className="text-brand-red">sentido pra você</span>.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Grade fixa, sem surpresas. Confira nossos horários abaixo.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
          {schedule.map((s) => (
            <div
              key={s.day}
              className={`relative overflow-hidden rounded-2xl p-7 ring-1 transition-all hover:-translate-y-1 ${
                s.open
                  ? "bg-surface-2 ring-white/10 hover:ring-brand-red/40"
                  : "bg-surface-2/60 ring-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${
                    s.open
                      ? "bg-brand-red/15 text-brand-red ring-brand-red/30"
                      : "bg-white/5 text-white/40 ring-white/10"
                  }`}
                >
                  <s.icon className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
                    s.open ? "text-brand-blue" : "text-white/40"
                  }`}
                >
                  {s.open ? "Aberto" : "Fechado"}
                </span>
              </div>

              <div className="mt-6 text-display text-2xl text-white">{s.day}</div>

              <ul className="mt-4 space-y-2">
                {s.slots.map((slot) => (
                  <li
                    key={slot}
                    className={`text-lg font-semibold tabular-nums ${
                      s.open ? "text-white/85" : "text-white/40"
                    }`}
                  >
                    {slot}
                  </li>
                ))}
              </ul>

              {s.open && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-blue" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
