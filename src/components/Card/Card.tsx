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

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  return [parseInt(clean.slice(0, 2), 16), parseInt(clean.slice(2, 4), 16), parseInt(clean.slice(4, 6), 16)];
}

/** Blends a hex color toward white — used for the avatar accent, a touch lighter than the card's own stop0. */
function lighten(hex: string, percent: number): string {
  const [r, g, b] = hexToRgb(hex);
  const t = percent / 100;
  const mix = (c: number) => Math.round(c + (255 - c) * t);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

/** Embeds an alpha channel into a hex color as `rgba(...)`. */
function withAlpha(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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

  const isPlaying = showPlay && playing;
  const isEnCursoPaused = showPlay && !playing;

  let border;
  let boxShadow;
  if (isPlaying) {
    border = '1.5px solid rgba(255, 255, 255, 0.5)';
    boxShadow = `0 18px 44px 2px ${withAlpha(stop0, 0.55)}, 0 4px 8px rgba(0, 0, 0, 0.18), inset 0 1px 2px rgba(255, 255, 255, 0.7)`;
  } else if (isEnCursoPaused) {
    // Mismo grosor de borde que isPlaying (solo cambia el color a
    // transparente) para que la transición entre play/pausa interpole
    // color en vez de saltar entre "none" y un borde real.
    border = '1.5px solid rgba(255, 255, 255, 0)';
    boxShadow = `0 14px 26px ${withAlpha(stop0, 0.16)}, 0 3px 6px rgba(0, 0, 0, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.25)`;
  } else {
    border = '1px solid rgba(77, 69, 59, 0.15)';
    boxShadow = `0 16px 34px ${withAlpha(stop0, 0.35)}, 0 3px 7px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.35)`;
  }

  return (
    <div
      className={`card${isPlaying ? ' card--playing' : ''}`}
      style={{
        background: `linear-gradient(180deg, ${withAlpha(stop0, 0.85)}, ${withAlpha(stop1, 0.85)})`,
        border,
        boxShadow,
      }}
    >
      {/* Brillo animado mientras el timer corre — fade-in/out suave al
          entrar y salir de play, barrido continuo de luz mientras dura. */}
      {showPlay && <div className={`card__glow${isPlaying ? ' card__glow--active' : ''}`} />}

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
