import { Field, FieldLabel, Slider } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta = {
	title: 'Primitives/Slider',
	component: Slider,
	argTypes: {
		min: { control: 'number' },
		max: { control: 'number' },
		step: { control: 'number' },
		disabled: { control: 'boolean' },
		orientation: {
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
		},
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
		disabled: false,
		orientation: 'horizontal',
	},
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Base UI reports a bare number for single-thumb sliders and an array for ranges. */
const toValues = (value: number | readonly number[]) =>
	Array.isArray(value) ? [...value] : [value as number];

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState([40]);

		return (
			<Field style={{ width: 360, gap: 12 }}>
				<FieldLabel>Stock threshold: {value[0]}</FieldLabel>
				<Slider
					{...args}
					value={value}
					onValueChange={(next) => setValue(toValues(next))}
				/>
			</Field>
		);
	},
};

export const Range: Story = {
	args: { step: 5 },
	render: (args) => {
		const [value, setValue] = useState([20, 80]);

		return (
			<Field style={{ width: 360, gap: 12 }}>
				<FieldLabel>
					Price range: £{value[0]} – £{value[1]}
				</FieldLabel>
				<Slider
					{...args}
					value={value}
					onValueChange={(next) => setValue(toValues(next))}
				/>
			</Field>
		);
	},
};
