import { InputNumber, Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/InputNumber',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => {
		const [quantity, setQuantity] = useState(1);

		return (
			<div style={{ width: 220, display: 'grid', gap: 8 }}>
				<Label htmlFor="quantity">Quantity</Label>
				<InputNumber
					id="quantity"
					value={quantity}
					onValueChange={setQuantity}
					min={0}
					max={20}
				/>
			</div>
		);
	},
};

export const Stepped: Story = {
	render: () => {
		const [weight, setWeight] = useState(2.5);

		return (
			<div style={{ width: 220, display: 'grid', gap: 8 }}>
				<Label htmlFor="weight">Weight (kg)</Label>
				<InputNumber
					id="weight"
					value={weight}
					onValueChange={setWeight}
					step={0.5}
					min={0}
				/>
			</div>
		);
	},
};
