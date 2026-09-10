import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusIcon, ChartIcon, GearIcon } from './icons';

const meta: Meta<typeof Button> = {
  title: 'Bitácora/Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  decorators: [
    (Story, ctx) => (
      <div
        style={{
          background: ctx.args.theme === 'dark' ? '#1a1c19' : '#f3ede0',
          padding: 24,
          borderRadius: 12,
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

/** Pill con icono + texto — usado para "Nuevo proyecto". Cambia `theme` en Controls para ver ambas versiones. */
export const Primary: Story = {
  args: { variant: 'primary', icon: <PlusIcon />, children: 'Nuevo proyecto', theme: 'light' },
};

const iconOptions = { Chart: <ChartIcon />, Gear: <GearIcon /> };

/** Circular, solo icono — usado en los botones del footer (Estadísticas, Ajustes). Es el mismo botón que Primary, sin el texto: cambia el icono en Controls. */
export const Icon: Story = {
  args: { variant: 'icon', icon: iconOptions.Chart, theme: 'light', 'aria-label': 'Acción' },
  argTypes: {
    icon: { control: 'select', options: Object.keys(iconOptions), mapping: iconOptions },
  },
};
