import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Bitácora/Atoms/ThemeToggle',
  component: ThemeToggle,
  parameters: { layout: 'centered', backgrounds: { default: 'Bitácora light' } },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Light: Story = { args: { theme: 'light' } };
export const Dark: Story = { args: { theme: 'dark' } };

/** Click para alternar de verdad. */
export const Interactive: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />;
  },
};
