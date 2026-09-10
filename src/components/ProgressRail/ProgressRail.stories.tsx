import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRail } from './ProgressRail';

const meta: Meta<typeof ProgressRail> = {
  title: 'Bitácora/Atoms/ProgressRail',
  component: ProgressRail,
  parameters: { layout: 'centered', backgrounds: { default: 'Bitácora dark' } },
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: 40, height: 120, background: 'hsl(330deg 45% 50%)', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ProgressRail>;

/** 0% — la barra no existe (invisible). Siempre así en Backlog. */
export const Empty: Story = { args: { percent: 0 } };

export const Half: Story = { args: { percent: 45 } };

/** 100% — llena hasta arriba del todo. Siempre así en Hecho. */
export const Full: Story = { args: { percent: 100 } };
