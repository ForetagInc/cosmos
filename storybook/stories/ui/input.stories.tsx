import { Input, Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Input',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<div style={{ width: 320, display: 'grid', gap: 8 }}>
			<Label htmlFor="email">Email</Label>
			<Input id="email" type="email" placeholder="name@foretag.co" />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ width: 320, display: 'grid', gap: 12 }}>
			<Input placeholder="Base" />
			<Input size="small" placeholder="Small" />
		</div>
	),
};

export const States: Story = {
	render: () => (
		<div style={{ width: 320, display: 'grid', gap: 12 }}>
			<Input defaultValue="Read only" readOnly />
			<Input placeholder="Disabled" disabled />
			<Input defaultValue="Invalid" aria-invalid />
		</div>
	),
};
