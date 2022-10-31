import React from 'react';
import type { StoryObj, StoryFn } from '@storybook/react';
import { Button, IButtonProps } from '.';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export default {
	title: 'Elements/Button',
	component: Button,
};

const Template: StoryFn<IButtonProps> = (args) =>
	<Button
		{...args}
	/>;

const tests = async ({ canvasElement }) => {
	const button = within(canvasElement).getByRole('button');

	expect(button).toBeInTheDocument();
	expect(button).toBeVisible();
};

export const Primary: StoryObj<typeof Template> = Template.bind({});

Primary.args = {
	label: 'Primary',
	variant: 'primary'
};

Primary.play = tests;

export const Secondary: StoryObj<typeof Template> = Template.bind({});
Secondary.args = {
	label: 'Secondary',
	variant: 'secondary'
};

Secondary.play = tests;

export const Tertiary: StoryObj<typeof Template> = Template.bind({});
Tertiary.args = {
	label: 'Tertiary',
	variant: 'tertiary'
};

Tertiary.play = tests;

export const Disabled: StoryObj<typeof Template> = Template.bind({});

Disabled.args = {
	label: 'Disabled',
	disabled: true,
};

Disabled.play = async (context) => {
	await tests(context);
	const button = within(context.canvasElement).getByRole('button');

	expect(button).toBeDisabled();
	expect(button).toHaveClass('cursor:not-allowed');
};