import { Header } from '../Header/Header';
import { InsightPanel, type InsightPanelProps } from '../InsightPanel/InsightPanel';
import { Card, type CardProps } from '../Card/Card';
import { Footer, type FooterProps } from '../Footer/Footer';
import './Widget.css';

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
  return (
    <div className={`ds-widget ds-widget--${theme}`}>
      <div className="ds-widget__top">
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
