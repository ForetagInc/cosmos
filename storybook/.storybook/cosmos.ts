import { create } from 'storybook/theming';

export default create({
	base: 'light',
	brandTitle: 'Cosmos',
	brandUrl: 'https://cosmos.foretag.co',
	// Relative so it resolves under any STORYBOOK_BASE_PATH.
	brandImage: './cosmos.png',
});
