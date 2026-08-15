import { Label, RadioGroup, RadioGroupItem } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/RadioGroup',
};

export default meta;

type Story = StoryObj;

const options = [
	{ value: 'standard', label: 'Standard delivery' },
	{ value: 'express', label: 'Express delivery' },
	{ value: 'collection', label: 'Collect in store' },
];

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="standard" style={{ display: 'grid', gap: 12 }}>
			{options.map((option) => (
				<div
					key={option.value}
					style={{ display: 'flex', alignItems: 'center', gap: 8 }}
				>
					<RadioGroupItem id={option.value} value={option.value} />
					<Label htmlFor={option.value}>{option.label}</Label>
				</div>
			))}
		</RadioGroup>
	),
};
