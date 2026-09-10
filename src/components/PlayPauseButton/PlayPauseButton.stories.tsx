import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PlayPauseButton } from './PlayPauseButton';

const meta: Meta<typeof PlayPauseButton> = {
  title: 'Bitácora/Atoms/PlayPauseButton',
  component: PlayPauseButton,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'Bitácora dark' },
  },
  decorators: [
    (Story) => (
      <div style={{ background: 'hsl(90deg 45% 42%)', padding: 24, borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof PlayPauseButton>;

/** Timer en marcha — fondo sólido, icono oscuro. Solo aparece en tarjetas "En curso". */
export const On: Story = { args: { playing: true } };

/** Disponible para reanudar — fondo translúcido, icono claro. */
export const Off: Story = { args: { playing: false } };

/** Click para alternar de verdad entre los dos estados. */
export const Interactive: Story = {
  render: () => {
    const [playing, setPlaying] = useState(true);
    return <PlayPauseButton playing={playing} onToggle={() => setPlaying((p) => !p)} />;
  },
};
