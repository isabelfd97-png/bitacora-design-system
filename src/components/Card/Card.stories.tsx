import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  // Molécula: compone Avatar + StatChip + PlayPauseButton + ProgressRail (átomos).
  title: 'Bitácora/Molecules/Card',
  component: Card,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ background: '#f3ede0', padding: 24, borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    estado: {
      control: 'select',
      options: ['en-curso', 'en-pausa', 'esperando', 'backlog', 'hecho'],
    },
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const baseArgs = {
  projectCode: 'DP-042',
  title: 'Desktop widget refresh',
  description: 'Rediseño del widget principal para el escritorio del equipo',
  dueDate: 'DUE 18 SEP',
  assignees: ['A', 'M', 'J'],
  stats: { comments: 3, tasks: 5, files: 2 },
  time: '00:44:12',
};

export const EnCurso: Story = {
  args: { ...baseArgs, estado: 'en-curso', percent: 78, playing: true },
};

export const EnPausa: Story = {
  args: {
    ...baseArgs,
    estado: 'en-pausa',
    percent: 45,
    projectCode: 'DP-018',
    title: 'DesignPulse — panel de tarea',
    description: 'Rediseño del panel lateral de gestión de tareas',
    dueDate: 'DUE 25 SEP',
    time: '01:12:05',
  },
};

export const Esperando: Story = {
  args: {
    ...baseArgs,
    estado: 'esperando',
    percent: 30,
    projectCode: 'DS-042',
    title: 'Revisión de tokens con equipo',
    description: 'Sesión de revisión de variables y tokens del DS',
    dueDate: 'DUE 20 SEP',
    time: '00:08:40',
  },
};

export const Backlog: Story = {
  args: {
    ...baseArgs,
    estado: 'backlog',
    percent: 0,
    projectCode: 'BK-101',
    title: 'The Future Designer — triage',
    description: 'Idea capturada para revisar y priorizar más adelante.',
    dueDate: 'SIN FECHA',
    time: '00:00:00',
  },
};

export const Hecho: Story = {
  args: {
    ...baseArgs,
    estado: 'hecho',
    percent: 100,
    title: 'Definir los 5 estados',
    description: 'Documentar estados del sistema de componentes',
    dueDate: '1 SEPT',
  },
};

/** Interactive: click play/pause to see the button flip state. */
export const Interactive: Story = {
  render: (args) => {
    const [playing, setPlaying] = useState(true);
    return <Card {...args} playing={playing} onTogglePlay={() => setPlaying((p) => !p)} />;
  },
  args: { ...baseArgs, estado: 'en-curso', percent: 78 },
};
