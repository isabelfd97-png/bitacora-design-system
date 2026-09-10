import './ProgressRail.css';

export interface ProgressRailProps {
  /** 0–100. Rail is hidden at 0%, fully filled at 100%. Fills upward from the bottom. */
  percent: number;
}

/** Thin vertical progress indicator on the left edge of the card. */
export function ProgressRail({ percent }: ProgressRailProps) {
  if (percent <= 0) return null;
  return (
    <div className="progress-rail">
      <div className="progress-rail__fill" style={{ height: `${percent}%` }} />
    </div>
  );
}
