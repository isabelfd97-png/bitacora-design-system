import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusIcon, ChartIcon, GearIcon } from './icons';

const meta: Meta<typeof Button> = {
  title: 'Bitácora/Atoms/Button',
  component: Button,
  parameters: { layout: 'centered', backgrounds: { default: 'Bitácora light' } },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', icon: <PlusIcon />, children: 'Nuevo proyecto', theme: 'light' },
};

export const PrimaryDark: Story = {
  args: { variant: 'primary', icon: <PlusIcon />, children: 'Nuevo proyecto', theme: 'dark' },
  parameters: { backgrounds: { default: 'Bitácora dark' } },
};

export const IconChart: Story = {
  name: 'Icon — Estadísticas',
  args: { variant: 'icon', icon: <ChartIcon />, theme: 'light', 'aria-label': 'Estadísticas' },
};

export const IconGear: Story = {
  name: 'Icon — Ajustes',
  args: { variant: 'icon', icon: <GearIcon />, theme: 'light', 'aria-label': 'Ajustes' },
};

/** Los tres tal como aparecen juntos en el footer del widget. */
export const FooterRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button variant="primary" icon={<PlusIcon />} theme="light">
        Nuevo proyecto
      </Button>
      <div style={{ flex: 1 }} />
      <Button variant="icon" icon={<ChartIcon />} theme="light" aria-label="Estadísticas" />
      <Button variant="icon" icon={<GearIcon />} theme="light" aria-label="Ajustes" />
    </div>
  ),
};
