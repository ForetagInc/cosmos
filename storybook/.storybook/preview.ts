import {
	APP_THEME_DEFINITIONS,
	type AppTheme,
	type AppThemeMode,
	applyTheme,
	normalizeTheme,
	normalizeThemeMode,
} from '@foretag/cosmos';
import type { Preview } from '@storybook/react-vite';
import { addons } from 'storybook/preview-api';
import './preview.css';

const themeOptions = Object.entries(APP_THEME_DEFINITIONS).flatMap(
	([theme, { label, modes }]) =>
		modes.map((mode) => ({
			value: `${theme}-${mode}`,
			title: modes.length > 1 ? `${label} ${mode}` : label,
		})),
);

function parseThemeOption(value: unknown): [AppTheme, AppThemeMode] {
	const [theme, mode] = String(value).split('-');
	return [normalizeTheme(theme), normalizeThemeMode(mode)];
}

// Decorators only wrap stories, so MDX prose (the docs pages) would never get a
// theme. Listening on the channel themes the whole preview document instead.
const channel = addons.getChannel();

function syncTheme({ globals }: { globals?: { theme?: unknown } }) {
	applyTheme(document.documentElement, ...parseThemeOption(globals?.theme));
}

channel.on('setGlobals', syncTheme);
channel.on('globalsUpdated', syncTheme);

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		layout: 'centered',

		options: {
			// Docs land first; Storybook opens on the first entry in the sidebar.
			storySort: {
				order: [
					'Getting Started',
					['Introduction', 'Installation'],
					'Foundations',
					['Theming', 'Design Tokens'],
					'Primitives',
				],
			},
		},

		a11y: {
			// Any axe violation fails the story test run.
			test: 'error',
		},
	},
	globalTypes: {
		theme: {
			description: 'Cosmos theme',
			toolbar: {
				icon: 'paintbrush',
				title: 'Theme',
				dynamicTitle: true,
				items: themeOptions,
			},
		},
	},
	initialGlobals: {
		theme: 'marble-light',
	},
	decorators: [
		(Story, context) => {
			applyTheme(
				document.documentElement,
				...parseThemeOption(context.globals.theme),
			);
			return Story();
		},
	],
};

export default preview;
