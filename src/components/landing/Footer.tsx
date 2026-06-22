import logoAcademia from "@/assets/logoacad-removebg-preview.png";
import { MapPin, MessageCircle, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={logoAcademia}
              alt="Academia Perfformance"
              className="h-20 w-auto drop-shadow-[0_4px_18px_rgba(220,38,38,0.4)]"
            />
            <p className="mt-6 max-w-md text-sm text-white/55">
              Treine musculação de verdade em um ambiente dedicado à sua evolução
              diária, com mensalidades que cabem no seu bolso.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { 
                  Icon: Facebook, 
                  href: "https://www.facebook.com/share/18uXdnMAdZ/", 
                  label: "Facebook" 
                },
                { 
                  Icon: MessageCircle, 
                  href: "https://wa.me/5518991236821", 
                  label: "WhatsApp" 
                },
                { 
                  Icon: MapPin, 
                  href: "https://maps.app.goo.gl/q2YwPxAYhS5mZVAu9?g_st=aw", 
                  label: "Localização" 
                }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/70 transition-all hover:border-brand-red hover:bg-brand-red hover:text-white hover:scale-110"
                >
                  <item.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-display text-sm uppercase tracking-widest text-white">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { l: "Início", h: "#inicio" },
                { l: "Estrutura", h: "#estrutura" },
                { l: "Horários", h: "#horarios" },
                { l: "Planos", h: "#planos" },
              ].map((item) => (
                <li key={item.h}>
                  <a href={item.h} className="text-white/60 hover:text-brand-red transition-colors">
                    {item.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-display text-sm uppercase tracking-widest text-white">Contato</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-white/65">
                <Phone className="h-4 w-4 shrink-0 text-brand-red" />
                <span>(18) 99123-6821</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/5 pt-10 text-center">
          <img
            src={logoAcademia}
            alt="Academia Perfformance"
            className="h-16 w-auto opacity-90"
          />
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Academia Perfformance. Todos os direitos reservados.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Forjados no <span className="text-brand-red">ferro</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
