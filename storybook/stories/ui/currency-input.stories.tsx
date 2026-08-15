import { CurrencyInput, Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/CurrencyInput',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<div style={{ width: 280, display: 'grid', gap: 8 }}>
			<Label htmlFor="price">Unit price</Label>
			<CurrencyInput id="price" code="GBP" symbol="£" defaultValue="24.00" />
		</div>
	),
};

export const Small: Story = {
	render: () => (
		<div style={{ width: 280 }}>
			<CurrencyInput size="small" code="USD" symbol="$" defaultValue="9.99" />
		</div>
	),
};
