import {
	APP_THEME_DEFINITIONS,
	type AppTheme,
	type AppThemeMode,
	applyTheme,
	normalizeTheme,
	normalizeThemeMode,
} from '@foretag/cosmos';
import type { Preview } from '@storybook/react-vite';
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
