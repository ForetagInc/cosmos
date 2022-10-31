import React from 'react';
import type { StoryObj, StoryFn } from '@storybook/react';
import { Checkbox, ICheckboxProps } from '.';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export default {
	title: 'Elements/Checkbox',
	component: Checkbox,
};

const Template: StoryFn<ICheckboxProps> = (args) =>
	<Checkbox
		{...args}
	/>;

export const Primary: StoryObj<typeof Template> = Template.bind({});

Primary.args = {
	label: 'Primary',
};
