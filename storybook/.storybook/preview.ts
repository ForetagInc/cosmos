import type { Preview } from '@storybook/react-vite';
import '../src/styles/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: 'centered',
	},
};

export default preview;
