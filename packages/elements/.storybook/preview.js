import '../master.config';

// 👉 Toolbar - Disabled until themes are implemented

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Theme variants for components',
		defaultValue: 'Screen',
		toolbar: {
			icon: 'structure',
			// Array of plain string values or MenuItem shape (see below)
			items: ['Screen', 'XR'],
			// Property that specifies if the name of the item will be displayed
			title: true,
			// Change title based on selected value
			dynamicTitle: true,
		},
	},
};

// 👉 Viewports

const viewports = {
	macBookPro13: {
		name: 'Macbook Pro 13"',
		styles: {
			width: '1600px',
			height: '2560px'
		}
	},
	macBookPro16: {
		name: 'Macbook Pro 16"',
		styles: {
			width: '1920px',
			height: '3072px'
		}
	},
	iPadAir4: {
		name: 'iPad (4th Gen)',
		styles: {
			width: '1536px',
			height: '2048px'
		}
	},
	iPhone13Pro: {
		name: 'iPhone 13 (Pro)',
		styles: {
			width: '1170px',
			height: '2532px'
		}
	},
	iPhone13ProMax: {
		name: 'iPhone 13 Pro Max',
		styles: {
			width: '1284px',
			height: '2778px'
		}
	},
	appleWatch: {
		name: 'Apple Watch Series 7',
		styles: {
			width: '396px',
			height: '484px'
		}
	}
};

// 👉 Actions

const actions = { argTypesRegex: '^on[A-Z].*' };

// 👉 Controls

const controls = {
	expanded: true,
	matchers: {
		color: /(background|color)$/i,
		date: /Date$/,
	},
	hideNoControlsWarning: true
};

export const parameters = {
	layout: 'centered',
	viewMode: 'docs',
	actions,
	viewport: {
		viewports
	},
	controls,
};