import type { Preview } from '@storybook/react-vite'
import '../src/fonts.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Bitácora dark',
      values: [
        { name: 'Bitácora dark', value: '#1a1c19' },
        { name: 'Bitácora light', value: '#f3ede0' },
      ],
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
