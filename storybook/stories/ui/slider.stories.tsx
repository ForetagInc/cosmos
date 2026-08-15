import { Label, Slider } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/Slider',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState([40]);

		return (
			<div style={{ width: 360, display: 'grid', gap: 12 }}>
				<Label>Stock threshold: {value[0]}</Label>
				<Slider value={value} onValueChange={setValue} max={100} step={1} />
			</div>
		);
	},
};

export const Range: Story = {
	render: () => {
		const [value, setValue] = useState([20, 80]);

		return (
			<div style={{ width: 360, display: 'grid', gap: 12 }}>
				<Label>
					Price range: £{value[0]} – £{value[1]}
				</Label>
				<Slider value={value} onValueChange={setValue} max={100} step={5} />
			</div>
		);
	},
};
