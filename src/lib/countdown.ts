export type EventoFim = { nome: string; dia: number; mes: number; ano: number };

export const EVENTOS: EventoFim[] = [
  { nome: "Dia de apresentar os cartazes", dia: 5, mes: 11, ano: 2026 },
  { nome: "Dia de apresentar as telas", dia: 6, mes: 11, ano: 2026 },
  { nome: "Dia da apresentação final", dia: 9, mes: 11, ano: 2026 },
];

/** Data de hoje (dia/mês/ano) no fuso de São Paulo. */
export function hojeSaoPaulo(agora: Date = new Date()) {
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(agora);
  const g = (t: string) => Number(p.find((x) => x.type === t)!.value);
  return { dia: g("day"), mes: g("month"), ano: g("year") };
}

export function diasRestantes(e: EventoFim, agora: Date = new Date()) {
  const h = hojeSaoPaulo(agora);
  return Math.round((Date.UTC(e.ano, e.mes - 1, e.dia) - Date.UTC(h.ano, h.mes - 1, h.dia)) / 86400000);
}

export function frase(dias: number) {
  if (dias >= 5) return "Ainda dá tempo... talvez.";
  if (dias >= 3) return "O relógio começou a rir de você.";
  if (dias === 2) return "Hora de pedir ajuda aos céus. Ou ao inferno.";
  return "Reze. Ou procrastine mais um pouco.";
}
