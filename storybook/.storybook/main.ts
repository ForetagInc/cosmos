// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import path, { dirname } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storybookBase = process.env.STORYBOOK_BASE_PATH ?? '/storybook/';

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
	addons: [
        getAbsolutePath("@storybook/addon-docs"),
        getAbsolutePath("@storybook/addon-a11y"),
        getAbsolutePath("@storybook/addon-themes")
    ],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
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

function getAbsolutePath(value: string): any {
    return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
