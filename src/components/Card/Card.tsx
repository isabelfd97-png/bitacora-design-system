import { Avatar } from '../Avatar/Avatar';
import { StatChip } from '../StatChip/StatChip';
import { PlayPauseButton } from '../PlayPauseButton/PlayPauseButton';
import { ProgressRail } from '../ProgressRail/ProgressRail';
import { gradientFor, STATUS_LABEL, canPlay, effectivePercent, type Estado } from './colorRamp';
import './Card.css';

export interface CardProps {
  estado: Estado;
  /** Ignored for Backlog (always 0) and Hecho (always 100). */
  percent: number;
  projectCode: string;
  title: string;
  description: string;
  dueDate: string;
  assignees: string[];
  stats: { comments: number; tasks: number; files: number };
  /** Elapsed timer, formatted (e.g. "00:44:12"). */
  time: string;
  /** Only meaningful when estado === 'en-curso'. */
  playing?: boolean;
  onTogglePlay?: () => void;
}

function lighten(cssHsl: string, extraLightness: number): string {
  const match = cssHsl.match(/hsl\((\d+)deg (\d+)% (\d+)%\)/);
  if (!match) return cssHsl;
  const [, h, s, l] = match;
  const newL = Math.min(92, Number(l) + extraLightness);
  return `hsl(${h}deg ${s}% ${newL}%)`;
}

/** The card component of Bitácora's kanban board — one project, one state. */
export function Card({
  estado,
  percent,
  projectCode,
  title,
  description,
  dueDate,
  assignees,
  stats,
  time,
  playing = false,
  onTogglePlay,
}: CardProps) {
  const pct = effectivePercent(estado, percent);
  const { stop0, stop1 } = gradientFor(estado, pct);
  const avatarColor = lighten(stop0, 16);
  const showPlay = canPlay(estado);

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(135deg, ${stop0}, ${stop1})`,
        boxShadow: `0 14px 26px -4px ${stop0.replace(')', ' / 35%)')}, 0 3px 6px rgba(0,0,0,0.14)`,
      }}
    >
      <ProgressRail percent={pct} />

      <div className="card__header">
        <span className="card__status">{STATUS_LABEL[estado]}</span>
        <span className="card__code">{projectCode}</span>
      </div>

      <div className="card__content">
        <div className="card__metric">
          <span className="card__percent">{pct}%</span>
          <span className="card__caption">COMPLETE</span>
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        {showPlay && (
          <div className="card__timer-col">
            <PlayPauseButton playing={playing} onToggle={onTogglePlay} />
            <span className="card__timer-value">{time}</span>
          </div>
        )}
      </div>

      <div className="card__schedule">
        <div className="card__metadata">
          <div className="card__avatars">
            {assignees.map((initial, i) => (
              <Avatar key={i} initial={initial} color={avatarColor} />
            ))}
          </div>
          <div className="card__stats">
            <StatChip icon="comment" count={stats.comments} />
            <StatChip icon="task" count={stats.tasks} />
            <StatChip icon="file" count={stats.files} />
          </div>
        </div>
        <span className="card__due">{dueDate}</span>
      </div>
    </div>
  );
}
