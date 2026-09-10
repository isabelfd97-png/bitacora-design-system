import type { Meta, StoryObj } from '@storybook/react';
import { StatChip } from './StatChip';

const meta: Meta<typeof StatChip> = {
  title: 'Bitácora/Atoms/StatChip',
  component: StatChip,
  parameters: { layout: 'centered' },
  // StatChip is white-on-transparent — the Storybook "backgrounds" addon parameter
  // isn't reliably applied in this Storybook version, so we wrap it in a real dark div instead.
  decorators: [
    (Story) => (
      <div style={{ background: '#1a1c19', padding: 24, borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: { control: 'select', options: ['comment', 'task', 'file'] },
  },
};
export default meta;

type Story = StoryObj<typeof StatChip>;

export const Comment: Story = { args: { icon: 'comment', count: 3 } };
export const Task: Story = { args: { icon: 'task', count: 5 } };
export const File: Story = { args: { icon: 'file', count: 2 } };

/** Las 3 se muestran siempre juntas en la fila de metadatos de la card. */
export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <StatChip icon="comment" count={3} />
      <StatChip icon="task" count={5} />
      <StatChip icon="file" count={2} />
    </div>
  ),
};
