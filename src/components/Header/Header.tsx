import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Header.css';

function CompassIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.2 4.8 7.8 7.8 4.8 9.2 6.2 6.2 9.2 4.8Z" fill="currentColor" />
    </svg>
  );
}

export interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme?: () => void;
}

/** Molécula: marca (compás + "Bitácora") + ThemeToggle. Cabecera del widget. */
export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <div className={`ds-header ds-header--${theme}`}>
      <div className="ds-header__brand">
        <CompassIcon />
        <span className="ds-header__brand-name">BITÁCORA</span>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
  );
}
