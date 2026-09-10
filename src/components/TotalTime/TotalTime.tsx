import './TotalTime.css';

export interface TotalTimeProps {
  /** Formatted elapsed time, e.g. "00:44:12". */
  time: string;
  theme?: 'light' | 'dark';
}

/**
 * Muestra el tiempo total de foco acumulado hoy.
 *
 * Comportamiento (implementado en el widget, no en este componente visual):
 * el contador solo avanza mientras haya un play activo en alguna Card de la
 * sección "En curso". Como solo un play puede estar activo a la vez en todo
 * el widget, este número es la SUMA de todos los tramos con play dado a lo
 * largo del día, sin importar en cuántas cards distintas se haya repartido
 * ese tiempo — no es el tiempo de un solo proyecto, es el total del día.
 */
export function TotalTime({ time, theme = 'light' }: TotalTimeProps) {
  return (
    <div className={`total-time total-time--${theme}`}>
      <span className="total-time__label">TIEMPO TOTAL</span>
      <span className="total-time__value">{time}</span>
    </div>
  );
}
