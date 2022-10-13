module.exports = {
	'stories': [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		'@storybook/addon-toolbars',

		// Third party addons
		'@pxtrn/storybook-addon-docs-stencil',
	],
	features: {
		storyStoreV7: true,
		postcss: false,
		interactionsDebugger: true,
	},
	core: {
		disableTelemetry: true,
		builder: '@storybook/builder-vite',
	},
}