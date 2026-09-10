import { Button } from '../Button/Button';
import { PlusIcon, ChartIcon, GearIcon } from '../Button/icons';
import './Footer.css';

export interface FooterProps {
  theme?: 'light' | 'dark';
  onNewProject?: () => void;
  onOpenStats?: () => void;
  onOpenSettings?: () => void;
}

/** Molécula: compone 3 instancias de Button (átomo). Barra inferior del widget. */
export function Footer({ theme = 'light', onNewProject, onOpenStats, onOpenSettings }: FooterProps) {
  return (
    <div className="ds-footer">
      <Button variant="primary" icon={<PlusIcon />} theme={theme} onClick={onNewProject}>
        Nuevo proyecto
      </Button>
      <div className="ds-footer__spacer" />
      <Button variant="icon" icon={<ChartIcon />} theme={theme} aria-label="Estadísticas" onClick={onOpenStats} />
      <Button variant="icon" icon={<GearIcon />} theme={theme} aria-label="Ajustes" onClick={onOpenSettings} />
    </div>
  );
}
