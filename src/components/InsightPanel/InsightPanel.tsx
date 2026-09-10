import './InsightPanel.css';

function SparkleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M5 0l1 3.2L9.2 4 6 5l-1 4-1-4-3.2-1L4 3.2 5 0Z" />
    </svg>
  );
}

export interface InsightPanelProps {
  /** Small caps label, e.g. "Plan de hoy". */
  label: string;
  /** Headline value, e.g. "3h 30min". */
  heroValue: string;
  /** Sits right next to heroValue on the same baseline, e.g. "libres hoy para foco". */
  heroCaption: string;
  /** Supporting sentence below, max ~2 lines worth of content. */
  detail: string;
  theme?: 'light' | 'dark';
}

/** Glass panel that surfaces one AI-generated insight — currently used for "Plan de hoy". */
export function InsightPanel({ label, heroValue, heroCaption, detail, theme = 'light' }: InsightPanelProps) {
  return (
    <div className={`insight-panel insight-panel--${theme}`}>
      <div className="insight-panel__label-row">
        <SparkleIcon />
        <span className="insight-panel__label">{label}</span>
      </div>
      <div className="insight-panel__hero-row">
        <span className="insight-panel__hero-value">{heroValue}</span>
        <span className="insight-panel__hero-caption">{heroCaption}</span>
      </div>
      <p className="insight-panel__detail">{detail}</p>
    </div>
  );
}
