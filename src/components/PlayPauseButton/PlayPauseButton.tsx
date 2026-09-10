import './PlayPauseButton.css';

export interface PlayPauseButtonProps {
  /** Whether the timer is currently running for this card. */
  playing: boolean;
  onToggle?: () => void;
}

/** Timer control shown only on "En curso" cards. Solid + dark icon while playing, translucent + light icon while paused. */
export function PlayPauseButton({ playing, onToggle }: PlayPauseButtonProps) {
  return (
    <button
      type="button"
      className={`play-pause-button ${playing ? 'play-pause-button--on' : 'play-pause-button--off'}`}
      onClick={onToggle}
      aria-label={playing ? 'Pausar' : 'Reanudar'}
      aria-pressed={playing}
    >
      {playing ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="1.5" y="1" width="3" height="10" rx="0.8" fill="currentColor" />
          <rect x="7.5" y="1" width="3" height="10" rx="0.8" fill="currentColor" />
        </svg>
      ) : (
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
          <path d="M0 0 11 6.5 0 13Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
