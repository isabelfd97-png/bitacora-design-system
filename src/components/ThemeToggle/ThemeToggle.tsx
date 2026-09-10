import './ThemeToggle.css';

function SunIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
      <path d="M4.5 0l1 2.6L8 3.5 5.4 4.5 4.5 9l-1-4.5L1 3.5l2.5-1L4.5 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
      <path d="M9 5.8A4.5 4.5 0 1 1 3.2 0 3.6 3.6 0 0 0 9 5.8Z" />
    </svg>
  );
}

export interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle?: () => void;
}

/** Light/dark switch — the thumb slides left in light mode, right in dark, carrying a sun or moon icon. */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="theme-toggle"
      onClick={onToggle}
    >
      <span className={`theme-toggle__thumb theme-toggle__thumb--${theme}`}>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
