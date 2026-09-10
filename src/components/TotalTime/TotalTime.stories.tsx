import type { Meta, StoryObj } from '@storybook/react';
import { TotalTime } from './TotalTime';

const meta: Meta<typeof TotalTime> = {
  title: 'Bitácora/Atoms/TotalTime',
  component: TotalTime,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tiempo total de foco acumulado **hoy**. Solo avanza mientras hay un play activo en una Card de "En curso" — ' +
          'como solo un play puede estar activo a la vez en todo el widget, este número es la **suma de todos los tramos con play dado a lo largo del día**, ' +
          'repartidos entre las cards que hagan falta. No es el tiempo de un proyecto: es el total del día completo.',
      },
    },
  },
  decorators: [
    (Story, ctx) => (
      <div style={{ background: ctx.args.theme === 'dark' ? '#1a1c19' : '#f3ede0', padding: 24, borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
};
export default meta;

type Story = StoryObj<typeof TotalTime>;

export const Light: Story = { args: { time: '00:44:12', theme: 'light' } };
export const Dark: Story = { args: { time: '00:44:12', theme: 'dark' } };
