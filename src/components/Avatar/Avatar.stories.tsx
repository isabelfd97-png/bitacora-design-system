import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Bitácora/Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered', backgrounds: { default: 'Bitácora dark' } },
  argTypes: {
    color: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { initial: 'A', color: 'hsl(90deg 50% 60%)' },
};

/** Avatares se usan siempre en pila, superpuestos con un margen negativo. */
export const Stack: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar initial="A" color="hsl(90deg 50% 60%)" />
      <Avatar initial="M" color="hsl(90deg 50% 60%)" />
      <Avatar initial="J" color="hsl(90deg 50% 60%)" />
    </div>
  ),
};
