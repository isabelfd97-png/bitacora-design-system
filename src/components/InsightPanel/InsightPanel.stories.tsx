import type { Meta, StoryObj } from '@storybook/react';
import { InsightPanel } from './InsightPanel';

const meta: Meta<typeof InsightPanel> = {
  title: 'Bitácora/Atoms/InsightPanel',
  component: InsightPanel,
  parameters: { layout: 'centered', backgrounds: { default: 'Bitácora light' } },
};
export default meta;

type Story = StoryObj<typeof InsightPanel>;

export const PlanDeHoy: Story = {
  args: {
    label: 'Plan de hoy',
    heroValue: '3h 30min',
    heroCaption: 'libres hoy para foco',
    detail: '5 reuniones entre las 9:00 y las 17:00 · sugerido para Desktop widget refresh y DesignPulse.',
  },
};
