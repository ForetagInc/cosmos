import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/InputGroup',
};

export default meta;

type Story = StoryObj;

export const WithPrefix: Story = {
	render: () => (
		<InputGroup style={{ width: 380 }}>
			<InputGroupAddon>
				<InputGroupText>foretag.co/</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="workspace" />
		</InputGroup>
	),
};

export const WithAction: Story = {
	render: () => (
		<InputGroup style={{ width: 380 }}>
			<InputGroupInput placeholder="Search orders" />
			<InputGroupAddon align="inline-end">
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
