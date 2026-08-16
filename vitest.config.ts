import { defineConfig } from 'vitest/config';

// Vitest 3 replaces vitest.workspace.ts with `test.projects`; Storybook's test
// addon reads this file to discover the suites it can run.
export default defineConfig({
	test: {
		projects: [
			'packages/cosmos/vitest.config.ts',
			'storybook/vitest.config.ts',
		],
	},
});
