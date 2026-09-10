import type { ReactNode } from 'react';
import './Button.css';

export interface ButtonProps {
  /** "primary" = pill with icon + label (e.g. "Nuevo proyecto"). "icon" = circular, icon only. */
  variant: 'primary' | 'icon';
  icon: ReactNode;
  /** Only used by variant="primary". */
  children?: ReactNode;
  /** Light widget bg → dark button. Dark widget bg → light button. Same inversion rule as the rest of the system. */
  theme?: 'light' | 'dark';
  onClick?: () => void;
  'aria-label'?: string;
}

/** Shared button used for "Nuevo proyecto" and the footer icon actions (Estadísticas, Ajustes). */
export function Button({ variant, icon, children, theme = 'light', onClick, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`ds-button ds-button--${variant} ds-button--${theme}`}
      onClick={onClick}
      {...rest}
    >
      <span className="ds-button__icon">{icon}</span>
      {variant === 'primary' && <span className="ds-button__label">{children}</span>}
    </button>
  );
}
