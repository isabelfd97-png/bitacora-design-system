import './StatChip.css';

export type StatIcon = 'comment' | 'task' | 'file';

export interface StatChipProps {
  icon: StatIcon;
  count: number;
}

function Icon({ icon }: { icon: StatIcon }) {
  switch (icon) {
    case 'comment':
      return (
        <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
          <path d="M0 2.5A2.5 2.5 0 0 1 2.5 0h5A2.5 2.5 0 0 1 10 2.5V6a2.5 2.5 0 0 1-2.5 2.5H4L1 9V6.2 6H2.5A2.5 2.5 0 0 1 0 3.5V2.5Z" fill="currentColor" />
        </svg>
      );
    case 'task':
      return (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M0 4 3.2 7 9 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'file':
      return (
        <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
          <path d="M0 1.4A1.4 1.4 0 0 1 1.4 0H5l3 3v5.6A1.4 1.4 0 0 1 6.6 10H1.4A1.4 1.4 0 0 1 0 8.6V1.4Z" fill="currentColor" />
          <path d="M5 0v3h3" fill="rgba(255,255,255,0.35)" />
        </svg>
      );
  }
}

/** Icon + count pair — shown three times per card (comments, tasks, files). */
export function StatChip({ icon, count }: StatChipProps) {
  return (
    <span className="stat-chip">
      <Icon icon={icon} />
      {count}
    </span>
  );
}
