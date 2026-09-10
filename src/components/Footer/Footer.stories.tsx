import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Bitácora/Molecules/Footer',
  component: Footer,
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

type Story = StoryObj<typeof Footer>;

export const Light: Story = { args: { theme: 'light', totalTime: '00:44:12' } };
export const Dark: Story = { args: { theme: 'dark', totalTime: '00:44:12' } };
