import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoAcademia from "@/assets/logoacad-removebg-preview.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-brand-red italic">404</h1>
        <h2 className="mt-4 text-xl font-bold uppercase tracking-widest text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O treino que você está procurando não existe ou foi movido para outra área.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-brand transition-all hover:bg-brand-red-hot hover:scale-105"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold uppercase tracking-widest text-foreground">
          Erro no Carregamento
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Nossa estrutura teve um problema técnico temporário. Tente recarregar a página.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-red-hot"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-background px-6 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-white/5"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Academia Perfformance | Musculação de Verdade" },
      { name: "description", content: "Estrutura honesta, suporte de salão e preço justo. A cultura do treino levada a sério no seu bairro." },
      { name: "author", content: "Academia Perfformance" },
      { property: "og:title", content: "Academia Perfformance" },
      { property: "og:description", content: "Musculação pura e forte. Treine em um ambiente dedicado à sua evolução diária." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoAcademia },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}