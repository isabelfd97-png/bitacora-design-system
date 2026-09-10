import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Widget, type WidgetProps } from './Widget';

const meta: Meta<typeof Widget> = {
  title: 'Bitácora/Organisms/Widget',
  component: Widget,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Widget>;

const sections: WidgetProps['sections'] = [
  {
    estado: 'en-curso',
    label: 'En curso',
    cards: [
      {
        percent: 78,
        projectCode: 'DP-042',
        title: 'Desktop widget refresh',
        description: 'Rediseño del widget principal para el escritorio del equipo',
        dueDate: 'DUE 18 SEP',
        assignees: ['A', 'M', 'J'],
        stats: { comments: 3, tasks: 5, files: 2 },
        time: '00:44:12',
        playing: true,
      },
    ],
  },
  {
    estado: 'en-pausa',
    label: 'En pausa',
    cards: [
      {
        percent: 45,
        projectCode: 'DP-018',
        title: 'DesignPulse — panel de tarea',
        description: 'Rediseño del panel lateral de gestión de tareas',
        dueDate: 'DUE 25 SEP',
        assignees: ['I', 'M', 'R'],
        stats: { comments: 3, tasks: 5, files: 2 },
        time: '01:12:05',
      },
    ],
  },
  {
    estado: 'esperando',
    label: 'Esperando',
    cards: [
      {
        percent: 30,
        projectCode: 'DS-042',
        title: 'Revisión de tokens con equipo',
        description: 'Sesión de revisión de variables y tokens del DS',
        dueDate: 'DUE 20 SEP',
        assignees: ['A', 'J', 'S'],
        stats: { comments: 3, tasks: 5, files: 2 },
        time: '00:08:40',
      },
    ],
  },
  {
    estado: 'backlog',
    label: 'Backlog',
    cards: [
      {
        percent: 0,
        projectCode: 'BK-101',
        title: 'The Future Designer — triage',
        description: 'Idea capturada para revisar y priorizar más adelante.',
        dueDate: 'SIN FECHA',
        assignees: ['A', 'J', 'S'],
        stats: { comments: 3, tasks: 5, files: 2 },
        time: '00:00:00',
      },
    ],
  },
  {
    estado: 'hecho',
    label: 'Hecho',
    cards: [
      {
        percent: 100,
        projectCode: 'RS-011',
        title: 'Definir los 5 estados',
        description: 'Documentar estados del sistema de componentes',
        dueDate: '1 SEPT',
        assignees: ['I', 'A', 'M'],
        stats: { comments: 3, tasks: 5, files: 2 },
        time: '00:00:00',
      },
      {
        percent: 100,
        projectCode: 'DV-003',
        title: 'Dirección visual — invernadero',
        description: 'Exploración visual para la app de plantas',
        dueDate: '31 AGO',
        assignees: ['S', 'R', 'J'],
        stats: { comments: 3, tasks: 5, files: 2 },
        time: '00:00:00',
      },
    ],
  },
];

const insight = {
  label: 'Plan de hoy',
  heroValue: '3h 30min',
  heroCaption: 'libres hoy para foco',
  detail: '5 reuniones entre las 9:00 y las 17:00 · sugerido para Desktop widget refresh y DesignPulse.',
};

function WidgetDemo({ initialTheme }: { initialTheme: 'light' | 'dark' }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);
  return (
    <Widget
      theme={theme}
      onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      greeting="Bienvenida Isabel, empecemos el día"
      insight={insight}
      sections={sections}
      footer={{ totalTime: '00:44:12' }}
    />
  );
}

export const Light: Story = { render: () => <WidgetDemo initialTheme="light" /> };
export const Dark: Story = { render: () => <WidgetDemo initialTheme="dark" /> };
