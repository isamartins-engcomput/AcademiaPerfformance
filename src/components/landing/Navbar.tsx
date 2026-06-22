import { useEffect, useState } from "react";
import logoAcademia from "@/assets/logoacad-removebg-preview.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#horarios", label: "Horários" },
  { href: "#planos", label: "Planos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logoAcademia}
            alt="Academia Perfformance"
            className="h-14 w-auto md:h-16 drop-shadow-[0_4px_12px_rgba(220,38,38,0.35)] transition-transform group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/5518991236821?text=Ol%C3%A1%2C%20gostaria%20de%20me%20matricular%20na%20Academia%20Perfformance%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-brand transition-all hover:bg-brand-red-hot hover:scale-105"
          >
            Matricule-se
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5518991236821?text=Ol%C3%A1%2C%20gostaria%20de%20me%20matricular%20na%20Academia%20Perfformance%21"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-brand-red px-3 py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Matricule-se
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
