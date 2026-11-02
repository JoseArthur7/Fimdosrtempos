import { frase, type EventoFim } from "@/lib/countdown";
import { SkullOverlay } from "./SkullOverlay";

const pad = (n: number) => String(n).padStart(2, "0");

export function CountdownCard({ evento, dias }: { evento: EventoFim; dias: number | null }) {
  const acabou = dias !== null && dias <= 0;
  return (
    <article className="card-burnt min-h-72 w-full p-6 sm:p-8">
      {acabou ? (
        <SkullOverlay nome={evento.nome} />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
          <h2 className="font-condensed text-xl font-semibold uppercase tracking-wider text-bone sm:text-2xl">{evento.nome}</h2>
          <p className="font-gothic text-2xl text-ember">{pad(evento.dia)}/{pad(evento.mes)}</p>
          {dias === null ? (
            <p className="font-condensed text-bone/60">Consultando o abismo...</p>
          ) : (
            <p className="font-condensed text-lg text-bone">
              {dias === 1 ? "Falta" : "Faltam"}{" "}
              <span className="text-fire font-gothic text-[clamp(4rem,14vw,6.5rem)] leading-none align-middle">{dias}</span>{" "}
              {dias === 1 ? "dia..." : "dias..."}
            </p>
          )}
          {dias !== null && <p className="font-condensed italic text-ember/90">{frase(dias)}</p>}
        </div>
      )}
    </article>
  );
}
