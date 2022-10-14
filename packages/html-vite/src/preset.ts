import type { StorybookConfig } from '@storybook/builder-vite';

export const addons: StorybookConfig['addons'] = ['storybook-html-renderer'];

export const core: StorybookConfig['core'] = {
	builder: '@storybook/builder-vite',
};