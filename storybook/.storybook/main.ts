import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';

// Root-relative by default: a '/storybook/' base breaks assets when the site is served
// at the domain root, and stops Vitest's browser runner from loading its page at all.
// Override only when Storybook is genuinely mounted under a sub-path.
const storybookBase = process.env.STORYBOOK_BASE_PATH ?? '/';

const config: StorybookConfig = {
	// Stories first so MDX docs attach to existing entries instead of reordering the sidebar.
	stories: ['../stories/**/*.stories.@(ts|tsx)', '../stories/**/*.mdx'],
	addons: [
		{
			name: getAbsolutePath('@storybook/addon-docs'),
			// Storybook's MDX has no GFM by default, so tables render as literal pipes.
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: { remarkPlugins: [remarkGfm] },
				},
			},
		},
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-themes'),
		getAbsolutePath('@storybook/addon-vitest'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	staticDirs: ['../public'],
	viteFinal: async (viteConfig) => ({
		...viteConfig,
		base: storybookBase,
		plugins: [...(viteConfig.plugins ?? []), tailwindcss()],
	}),
};

export default config;

function getAbsolutePath(value: string) {
	return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
