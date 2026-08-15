import { Separator } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Separator',
};

export default meta;

type Story = StoryObj;

export const Horizontal: Story = {
	render: () => (
		<div style={{ width: 320, display: 'grid', gap: 12 }}>
			<span>Account</span>
			<Separator />
			<span>Billing</span>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}>
			<span>Docs</span>
			<Separator orientation="vertical" />
			<span>API</span>
			<Separator orientation="vertical" />
			<span>Support</span>
		</div>
	),
};
