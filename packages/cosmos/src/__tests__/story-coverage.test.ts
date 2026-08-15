import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

const componentsDir = join(process.cwd(), 'src/components');
const storiesDir = join(process.cwd(), '../../storybook/stories');

function storyNames(dir: string): string[] {
	return readdirSync(dir, { recursive: true, encoding: 'utf8' })
		.filter((file) => file.endsWith('.stories.tsx'))
		.map((file) => file.split('/').pop()?.replace('.stories.tsx', '') ?? '');
}

function componentNames(dir: string): string[] {
	return readdirSync(dir, { recursive: true, encoding: 'utf8' })
		.filter((file) => file.endsWith('.tsx') && !file.includes('__tests__'))
		.map((file) => file.replace(/\.tsx$/, ''));
}

describe('story coverage', () => {
	const stories = new Set(storyNames(storiesDir).map((n) => n.toLowerCase()));

	test.each(componentNames(componentsDir))('%s has a story', (component) => {
		// Primitives get their own story file; domain components share one per directory.
		const candidates = component
			.split('/')
			.filter((segment) => segment !== 'index')
			.map((segment) => segment.toLowerCase());

		expect(candidates.some((candidate) => stories.has(candidate))).toBe(true);
	});
});
