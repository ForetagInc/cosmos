import { create } from 'storybook/theming';

export default create({
	base: 'light',
	brandTitle: 'Cosmos',
	brandUrl: 'https://cosmos.foretag.co',
	// Storybook defaults the brand link to _blank; keep it in the same tab.
	brandTarget: '_self',
	// Relative so it resolves under any STORYBOOK_BASE_PATH.
	brandImage: './cosmos.png',
});
