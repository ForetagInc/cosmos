import { Avatar, AvatarFallback, AvatarGroup } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const members = ['AL', 'CB', 'DE', 'FG', 'HI'];

const avatars = members.map((initials) => (
	<Avatar key={initials}>
		<AvatarFallback>{initials}</AvatarFallback>
	</Avatar>
));

const meta = {
	title: 'Primitives/AvatarGroup',
	component: AvatarGroup,
	argTypes: {
		max: { control: { type: 'number', min: 1, max: members.length } },
		sizeClassName: { control: 'text' },
	},
	args: { max: members.length, sizeClassName: 'size-8', children: avatars },
} satisfies Meta<typeof AvatarGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Truncated: Story = {
	args: { max: 3 },
};
