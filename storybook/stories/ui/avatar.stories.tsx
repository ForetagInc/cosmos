import { Avatar, AvatarFallback, AvatarImage } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Avatar',
	component: Avatar,
	argTypes: {
		size: {
			control: 'select',
			options: ['2xsmall', 'xsmall', 'small', 'base', 'large', 'xlarge'],
		},
		variant: {
			control: 'select',
			options: ['squared', 'rounded', 'square', 'circle'],
		},
	},
	args: { size: 'base', variant: 'square' },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Ada Lovelace" />
			<AvatarFallback>AL</AvatarFallback>
		</Avatar>
	),
};

export const FallbackOnly: Story = {
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>CB</AvatarFallback>
		</Avatar>
	),
};
