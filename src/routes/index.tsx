import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Modalidades } from "@/components/landing/Modalidades";
import { Planos } from "@/components/landing/Planos";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academia Perfformance — A sua melhor performance começa aqui" },
      {
        name: "description",
        content:
          "Academia Perfformance: estrutura premium, equipe especializada e modalidades para todos os níveis. Matricule-se e supere seus limites.",
      },
      { property: "og:title", content: "Academia Perfformance" },
      {
        property: "og:description",
        content: "Treine com propósito. Estrutura, equipe e energia para sua melhor performance.",
      },
    ],
    links: [
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
      <Features />
      <Modalidades />
      <Planos />
      <Footer />
    </main>
  );
}
