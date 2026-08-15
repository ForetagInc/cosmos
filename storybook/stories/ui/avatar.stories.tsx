import { Avatar, AvatarFallback, AvatarImage } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Avatar',
};

export default meta;

type Story = StoryObj;

export const WithImage: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Ada Lovelace" />
			<AvatarFallback>AL</AvatarFallback>
		</Avatar>
	),
};

export const FallbackOnly: Story = {
	render: () => (
		<Avatar>
			<AvatarFallback>CB</AvatarFallback>
		</Avatar>
	),
};
