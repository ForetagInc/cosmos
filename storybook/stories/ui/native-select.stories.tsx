import { Label, NativeSelect } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/NativeSelect',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<div style={{ width: 280, display: 'grid', gap: 8 }}>
			<Label htmlFor="currency">Currency</Label>
			<NativeSelect id="currency" defaultValue="GBP">
				<option value="GBP">Pound sterling</option>
				<option value="EUR">Euro</option>
				<option value="USD">US dollar</option>
			</NativeSelect>
		</div>
	),
};

export const Small: Story = {
	render: () => (
		<div style={{ width: 280 }}>
			<NativeSelect size="small" defaultValue="all">
				<option value="all">All orders</option>
				<option value="open">Open only</option>
			</NativeSelect>
		</div>
	),
};
