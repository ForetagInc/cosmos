import { Label, Textarea } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Textarea',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<div style={{ width: 380, display: 'grid', gap: 8 }}>
			<Label htmlFor="notes">Delivery notes</Label>
			<Textarea id="notes" placeholder="Leave with the neighbour" rows={4} />
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div style={{ width: 380 }}>
			<Textarea defaultValue="Archived orders cannot be edited." disabled />
		</div>
	),
};
