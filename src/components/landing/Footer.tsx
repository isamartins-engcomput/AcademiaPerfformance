import logo from "@/assets/logo.jpeg";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-md ring-1 ring-white/10">
                <img src={logo} alt="Logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-display text-lg text-white">Academia Perfformance</div>
                <div className="text-xs uppercase tracking-[0.2em] text-brand-red">Treine. Supere. Repita.</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/55">
              Mais que uma academia, um ecossistema de alta performance criado para
              quem busca evolução real, todos os dias.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/70 transition-all hover:border-brand-red hover:bg-brand-red hover:text-white hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-display text-sm uppercase tracking-widest text-white">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {["Início", "Estrutura", "Modalidades", "Planos"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-brand-red transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-display text-sm uppercase tracking-widest text-white">Contato</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <span>Av. Brasil, 463 — Zona Sul</span>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <Phone className="h-4 w-4 shrink-0 text-brand-red" />
                <span>(11) 3742-2720</span>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <Mail className="h-4 w-4 shrink-0 text-brand-red" />
                <span>contato@perfformance.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Academia Perfformance. Todos os direitos reservados.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Forjados no <span className="text-brand-red">ferro</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
