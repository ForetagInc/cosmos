module.exports = {
	'stories': [
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',

		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		'@storybook/addon-toolbars',
	],
	features: {
		interactionsDebugger: true,
	},
	framework: {
		'name': '@storybook/react-vite',
		'options': {}
	},
	core: {
		disableTelemetry: true,
	},
}