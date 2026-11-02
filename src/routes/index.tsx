import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FireBackground } from "@/components/FireBackground";
import { Header } from "@/components/Header";
import { CountdownCard } from "@/components/CountdownCard";
import { EVENTOS, diasRestantes } from "@/lib/countdown";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calendário do Fim dos Tempos 💀" },
      { name: "description", content: "Contagem regressiva apocalíptica para os cartazes, as telas e a apresentação final." },
      { property: "og:title", content: "Calendário do Fim dos Tempos 💀" },
      { property: "og:description", content: "Quanto tempo falta até o fim? Pouco. Muito pouco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [dias, setDias] = useState<(number | null)[]>(EVENTOS.map(() => null));
  useEffect(() => {
    const atualizar = () => setDias(EVENTOS.map((e) => diasRestantes(e)));
    atualizar();
    const id = setInterval(atualizar, 60_000);
    const vis = () => document.visibilityState === "visible" && atualizar();
    document.addEventListener("visibilitychange", vis);
    window.addEventListener("focus", atualizar);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", vis);
      window.removeEventListener("focus", atualizar);
    };
  }, []);

  return (
    <div className="relative min-h-screen pb-56">
      <FireBackground />
      <Header />
      <main className="mx-auto grid max-w-md gap-8 px-4 xl:max-w-6xl xl:grid-cols-3">
        {EVENTOS.map((e, i) => <CountdownCard key={e.nome} evento={e} dias={dias[i] ?? null} />)}
      </main>
    </div>
  );
}
