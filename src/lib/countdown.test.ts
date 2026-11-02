import { describe, it, expect } from "vitest";
import { diasRestantes, frase } from "./countdown";
const ev = { nome: "x", dia: 5, mes: 11, ano: 2026 };
describe("contagem", () => {
  it("usa o fuso de São Paulo: 01:09 UTC de 2/11 ainda é 1/11 em SP", () => {
    expect(diasRestantes(ev, new Date("2026-11-02T01:09:00Z"))).toBe(4);
  });
  it("no dia do evento é 0", () => {
    expect(diasRestantes(ev, new Date("2026-11-05T23:00:00-03:00"))).toBe(0);
  });
  it("frases por faixa", () => {
    expect(frase(5)).toBe("Ainda dá tempo... talvez.");
    expect(frase(3)).toBe("O relógio começou a rir de você.");
    expect(frase(2)).toBe("Hora de pedir ajuda aos céus. Ou ao inferno.");
    expect(frase(1)).toBe("Reze. Ou procrastine mais um pouco.");
  });
});
