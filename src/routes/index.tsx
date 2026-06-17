import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Estrutura } from "@/components/landing/Estrutura";
import { Horarios } from "@/components/landing/Horarios";
import { Planos } from "@/components/landing/Planos";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/logo-perfformance.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academia Perfformance — Musculação no seu bairro" },
      {
        name: "description",
        content:
          "Academia Perfformance: musculação com peso livre e maquinário, suporte de instrutores de salão e preço justo. Plano mensal R$ 99,90.",
      },
      { property: "og:title", content: "Academia Perfformance" },
      {
        property: "og:description",
        content: "Musculação honesta, suporte integral e preço acessível. Treine no seu bairro.",
      },
      { property: "og:image", content: logo.url },
    ],
    links: [
      { rel: "icon", type: "image/png", href: logo.url },
      { rel: "shortcut icon", type: "image/png", href: logo.url },
      { rel: "apple-touch-icon", href: logo.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Estrutura />
      <Horarios />
      <Planos />
      <Footer />
    </main>
  );
}
