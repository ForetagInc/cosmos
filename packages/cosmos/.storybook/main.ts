import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const storybookBase = process.env.STORYBOOK_BASE_PATH ?? '/storybook/';

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	staticDirs: ['../public'],
	viteFinal: async (viteConfig) => {
		return {
			...viteConfig,
			base: storybookBase,
			resolve: {
				...(viteConfig.resolve ?? {}),
				alias: {
					...(viteConfig.resolve?.alias ?? {}),
					'@': path.resolve(__dirname, '../src'),
				},
			},
		};
	},
};

export default config;
