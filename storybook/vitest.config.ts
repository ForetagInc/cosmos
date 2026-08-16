import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { defineConfig } from 'vitest/config';

const here = dirname(fileURLToPath(import.meta.url));

// Renders every story in a real browser and fails on render errors or failed
// play functions — the automated version of the manual story sweep.
export default defineConfig({
	plugins: [storybookTest({ configDir: join(here, '.storybook') })],
	test: {
		name: 'storybook',
		setupFiles: ['./.storybook/vitest.setup.ts'],
		browser: {
			enabled: true,
			headless: true,
			provider: 'playwright',
			instances: [{ browser: 'chromium' }],
		},
	},
});
