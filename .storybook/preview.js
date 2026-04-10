import '../src/tokens/tokens.css';
import '../css/styles.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'page',
      values: [
        { name: 'page', value: '#F7F8FA' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'brand', value: '#6D28D9' },
      ],
    },
  },
};

export default preview;
