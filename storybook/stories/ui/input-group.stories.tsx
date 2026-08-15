import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/InputGroup',
	component: InputGroupAddon,
	argTypes: {
		align: {
			control: 'select',
			options: ['inline-start', 'inline-end', 'block-start', 'block-end'],
		},
	},
	args: { align: 'inline-start' },
} satisfies Meta<typeof InputGroupAddon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithPrefix: Story = {
	render: (args) => (
		<InputGroup style={{ width: 380 }}>
			<InputGroupAddon {...args}>
				<InputGroupText>foretag.co/</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="workspace" />
		</InputGroup>
	),
};

export const WithAction: Story = {
	args: { align: 'inline-end' },
	render: (args) => (
		<InputGroup style={{ width: 380 }}>
			<InputGroupInput placeholder="Search orders" />
			<InputGroupAddon {...args}>
				<InputGroupButton>Search</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
};

export const Multiline: Story = {
	render: () => (
		<InputGroup style={{ width: 380 }}>
			<InputGroupTextarea placeholder="Add a note for the courier" />
		</InputGroup>
	),
};
