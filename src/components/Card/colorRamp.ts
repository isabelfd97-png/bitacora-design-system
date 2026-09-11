// Growth-ramp color system for the Card component.
// Matches the 6-band scale defined in Bitácora's Figma file and
// `01 Design/Card Component Spec.md`: color follows % complete,
// except En pausa (always gray), Backlog (always 0%/azul claro)
// and Hecho (always 100%/verde).
//
// Los colores vienen directos de la colección "Color" de Figma
// (grupo Background/Growth/<hue>/Base|Highlight) — no se recalculan
// aquí con HSL, para que el código y Figma no puedan desincronizarse
// en el propio valor del color, solo en cuál hue toca en cada banda.

export type Estado = 'en-curso' | 'en-pausa' | 'esperando' | 'backlog' | 'hecho';

interface Stage {
  name: string;
  /** Growth/<hue>/Base en Figma — el stop más oscuro/saturado del degradado. */
  base: string;
  /** Growth/<hue>/Highlight en Figma — el stop más claro. */
  highlight: string;
}

const STAGES: { min: number; max: number; stage: Stage }[] = [
  { min: 0, max: 16, stage: { name: 'Azul claro', base: '#2E81BD', highlight: '#5199CD' } },
  { min: 17, max: 33, stage: { name: 'Lavanda', base: '#6C3DAE', highlight: '#8760BE' } },
  { min: 34, max: 50, stage: { name: 'Rosa', base: '#B53675', highlight: '#C5598F' } },
  { min: 51, max: 67, stage: { name: 'Amarillo', base: '#B28724', highlight: '#CEA23B' } },
  { min: 68, max: 84, stage: { name: 'Amarillo verdoso', base: '#5E7722', highlight: '#7A9933' } },
  { min: 85, max: 100, stage: { name: 'Verde', base: '#36814F', highlight: '#4C9E68' } },
];

const GRIS: Stage = { name: 'Gris', base: '#7B6E60', highlight: '#8E8780' };

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
  return { stop0: stage.base, stop1: stage.highlight, stageName: stage.name };
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
