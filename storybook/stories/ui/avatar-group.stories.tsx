import { Avatar, AvatarFallback, AvatarGroup } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/AvatarGroup',
};

export default meta;

type Story = StoryObj;

const members = ['AL', 'CB', 'DE', 'FG', 'HI'];

export const Default: Story = {
	render: () => (
		<AvatarGroup>
			{members.map((initials) => (
				<Avatar key={initials}>
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>
			))}
		</AvatarGroup>
	),
};

export const Truncated: Story = {
	render: () => (
		<AvatarGroup max={3}>
			{members.map((initials) => (
				<Avatar key={initials}>
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>
			))}
		</AvatarGroup>
	),
};
