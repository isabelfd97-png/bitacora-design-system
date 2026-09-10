import type { Meta, StoryObj } from '@storybook/react';
import { InsightPanel } from './InsightPanel';

const meta: Meta<typeof InsightPanel> = {
  title: 'Bitácora/Atoms/InsightPanel',
  component: InsightPanel,
  parameters: { layout: 'centered' },
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

type Story = StoryObj<typeof InsightPanel>;

const baseArgs = {
  label: 'Plan de hoy',
  heroValue: '3h 30min',
  heroCaption: 'libres hoy para foco',
  detail: '5 reuniones entre las 9:00 y las 17:00 · sugerido para Desktop widget refresh y DesignPulse.',
};

/** Cambia `theme` en Controls para comparar claro/oscuro. */
export const PlanDeHoy: Story = {
  args: { ...baseArgs, theme: 'light' },
};

export const PlanDeHoyDark: Story = {
  args: { ...baseArgs, theme: 'dark' },
};
