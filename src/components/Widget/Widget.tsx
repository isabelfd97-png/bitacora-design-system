import { useEffect } from 'react';
import { Header } from '../Header/Header';
import { InsightPanel, type InsightPanelProps } from '../InsightPanel/InsightPanel';
import { Card, type CardProps } from '../Card/Card';
import { Footer, type FooterProps } from '../Footer/Footer';
import './Widget.css';

declare global {
  interface Window {
    bitacora?: {
      setTheme?: (theme: 'light' | 'dark') => void;
      startDrag?: () => void;
      endDrag?: () => void;
    };
  }
}

export interface WidgetSection {
  estado: CardProps['estado'];
  label: string;
  cards: Omit<CardProps, 'estado'>[];
}

export interface WidgetProps {
  theme: 'light' | 'dark';
  onToggleTheme?: () => void;
  greeting: string;
  insight: Omit<InsightPanelProps, 'theme'>;
  sections: WidgetSection[];
  footer: Omit<FooterProps, 'theme'>;
}

/**
 * Organismo: la pantalla completa del widget de escritorio de Bitácora.
 * Compone Header, InsightPanel, Card (una por sección) y Footer — todo lo
 * que ya existe como átomo/molécula, nada nuevo se dibuja aquí.
 */
export function Widget({ theme, onToggleTheme, greeting, insight, sections, footer }: WidgetProps) {
  // El drag termina en mouseup esté donde esté el cursor, no solo dentro
  // de la zona de arrastre — si no, soltar el botón fuera del widget lo
  // dejaría "pegado" al cursor.
  useEffect(() => {
    const handleUp = () => window.bitacora?.endDrag?.();
    window.addEventListener('mouseup', handleUp);
    return () => window.removeEventListener('mouseup', handleUp);
  }, []);

  function handleDragStart(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    // No arrastrar si el gesto empieza en un control interactivo (botones,
    // el toggle de tema...) — mismo criterio que ya marcaba el CSS.
    if (target.closest('button, input, [role="switch"]')) return;
    window.bitacora?.startDrag?.();
  }

  // Cuando algo está en foco, el resto del widget se oscurece un poco
  // para hacer de spotlight sobre la card que corre — eco del gesto de la
  // lámpara de la versión anterior.
  const anyPlaying = sections.some((section) => section.cards.some((card) => card.playing));

  return (
    <div className={`ds-widget ds-widget--${theme}${anyPlaying ? ' ds-widget--focused' : ''}`}>
      <div className="ds-widget__top" onMouseDown={handleDragStart}>
        <Header theme={theme} onToggleTheme={onToggleTheme} />
        <h1 className="ds-widget__greeting">{greeting}</h1>
        <InsightPanel {...insight} theme={theme} />
      </div>

      <div className="ds-widget__board-wrap">
        <div className="ds-widget__board">
          {sections.map((section) => (
            <div className="ds-widget__section" key={section.estado}>
              <div className="ds-widget__section-head">
                <span>{section.label}</span>
                <span>{section.cards.length}</span>
              </div>
              {section.cards.map((card, i) => (
                <Card key={i} estado={section.estado} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer {...footer} theme={theme} />
    </div>
  );
}
