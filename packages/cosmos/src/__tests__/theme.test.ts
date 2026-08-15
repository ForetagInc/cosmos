import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';
import {
	APP_THEMES,
	normalizeTheme,
	normalizeThemeMode,
	resolveThemeMode,
} from '../lib/theme';

describe('theme utilities', () => {
	test('normalizes known theme and mode values', () => {
		expect(APP_THEMES).toEqual(['marble', 'graphene', 'euclid', 'doomsday']);
		expect(normalizeTheme('graphene')).toBe('graphene');
		expect(normalizeTheme('unknown')).toBe('marble');
		expect(normalizeThemeMode('dark')).toBe('dark');
		expect(normalizeThemeMode('invalid')).toBe('system');
		expect(resolveThemeMode('system', 'light')).toBe('light');
	});

	test('contains tokenized CSS variables', () => {
		const css = readFileSync(join(process.cwd(), 'src/styles/app.css'), 'utf8');
		expect(css).toContain('--background');
		expect(css).toContain('--foreground');
		expect(css).toContain('--radius');
	});
});
