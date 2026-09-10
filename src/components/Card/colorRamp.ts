// Growth-ramp color system for the Card component.
// Matches the 6-band scale defined in Bitácora's Figma file and
// `01 Design/Card Component Spec.md`: color follows % complete,
// except En pausa (always gray), Backlog (always 0%/azul claro)
// and Hecho (always 100%/verde).

export type Estado = 'en-curso' | 'en-pausa' | 'esperando' | 'backlog' | 'hecho';

interface Stage {
  name: string;
  h: number;
  s: number;
  l: number;
}

const STAGES: { min: number; max: number; stage: Stage }[] = [
  { min: 0, max: 16, stage: { name: 'Azul claro', h: 205, s: 0.55, l: 0.58 } },
  { min: 17, max: 33, stage: { name: 'Lavanda', h: 265, s: 0.42, l: 0.58 } },
  { min: 34, max: 50, stage: { name: 'Rosa', h: 330, s: 0.48, l: 0.58 } },
  { min: 51, max: 67, stage: { name: 'Amarillo', h: 42, s: 0.6, l: 0.54 } },
  { min: 68, max: 84, stage: { name: 'Amarillo verdoso', h: 78, s: 0.5, l: 0.42 } },
  { min: 85, max: 100, stage: { name: 'Verde', h: 140, s: 0.35, l: 0.48 } },
];

const GRIS: Stage = { name: 'Gris', h: 30, s: 0.06, l: 0.55 };

function hslToCss(h: number, s: number, l: number): string {
  return `hsl(${h}deg ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;
}

/** Returns the CSS gradient stops (darker top-left, lighter bottom-right) for a card. */
export function gradientFor(estado: Estado, percent: number): { stop0: string; stop1: string; stageName: string } {
  let stage: Stage;
  if (estado === 'en-pausa') {
    stage = GRIS;
  } else if (estado === 'backlog') {
    stage = STAGES[0].stage; // azul claro, siempre
  } else if (estado === 'hecho') {
    stage = STAGES[5].stage; // verde, siempre
  } else {
    const band = STAGES.find((s) => percent >= s.min && percent <= s.max) ?? STAGES[STAGES.length - 1];
    stage = band.stage;
  }
  const stop0 = hslToCss(stage.h, Math.min(1, stage.s + 0.06), Math.max(0, stage.l - 0.12));
  const stop1 = hslToCss(stage.h, stage.s, Math.max(0, stage.l - 0.02));
  return { stop0, stop1, stageName: stage.name };
}

export const STATUS_LABEL: Record<Estado, string> = {
  'en-curso': 'In progress',
  'en-pausa': 'On hold',
  esperando: 'Waiting',
  backlog: 'Backlog',
  hecho: 'Done',
};

/** Only "en-curso" cards ever show a play/pause control. */
export function canPlay(estado: Estado): boolean {
  return estado === 'en-curso';
}

/** Backlog is always 0%, Hecho is always 100% — enforced regardless of the percent prop. */
export function effectivePercent(estado: Estado, percent: number): number {
  if (estado === 'backlog') return 0;
  if (estado === 'hecho') return 100;
  return percent;
}
