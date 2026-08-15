import { Input, Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Label',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<div style={{ width: 320, display: 'grid', gap: 8 }}>
			<Label htmlFor="reference">Reference</Label>
			<Input id="reference" placeholder="INV-0042" />
		</div>
	),
};
