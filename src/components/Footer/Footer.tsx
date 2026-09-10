import { Button } from '../Button/Button';
import { PlusIcon, ChartIcon, GearIcon } from '../Button/icons';
import { TotalTime } from '../TotalTime/TotalTime';
import './Footer.css';

export interface FooterProps {
  theme?: 'light' | 'dark';
  /** Tiempo total de foco acumulado hoy — ver TotalTime para el detalle de cómo se calcula. */
  totalTime: string;
  onNewProject?: () => void;
  onOpenStats?: () => void;
  onOpenSettings?: () => void;
}

/** Molécula: compone Button (x3) + TotalTime (átomos). Barra inferior del widget. */
export function Footer({ theme = 'light', totalTime, onNewProject, onOpenStats, onOpenSettings }: FooterProps) {
  return (
    <div className="ds-footer">
      <Button variant="primary" icon={<PlusIcon />} theme={theme} onClick={onNewProject}>
        Nuevo proyecto
      </Button>
      <div className="ds-footer__spacer" />
      <TotalTime time={totalTime} theme={theme} />
      <Button variant="icon" icon={<ChartIcon />} theme={theme} aria-label="Estadísticas" onClick={onOpenStats} />
      <Button variant="icon" icon={<GearIcon />} theme={theme} aria-label="Ajustes" onClick={onOpenSettings} />
    </div>
  );
}
