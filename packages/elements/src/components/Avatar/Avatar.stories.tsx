import React from 'react';
import type { Story, StoryObj, StoryFn } from '@storybook/react';
import { Avatar, IAvatarProps } from '.';

export default {
	title: 'Elements/Avatar',
	component: Avatar,
};

const Template: StoryFn<IAvatarProps> = (args) => <Avatar {...args} username='Chiru' />;

export const Text: StoryObj<typeof Template> = Template.bind({});

export const Image: StoryObj<typeof Template> = Template.bind({});
Image.args = {
	src: 'https://i.pravatar.cc/150',
};

export const Circled: StoryObj<typeof Template> = Template.bind({});
Circled.args = {
	username: 'User',
	src: 'https://i.pravatar.cc/150',
	circled: true,
};
