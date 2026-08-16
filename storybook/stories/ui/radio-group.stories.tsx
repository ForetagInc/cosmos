import { Field, FieldLabel, RadioGroup, RadioGroupItem } from '@foretag/cosmos';
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

// One Field per option: each radio renders as a span and needs its own label association.
export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="standard" style={{ display: 'grid', gap: 12 }}>
			{options.map((option) => (
				<Field key={option.value} orientation="horizontal">
					<RadioGroupItem value={option.value} />
					<FieldLabel>{option.label}</FieldLabel>
				</Field>
			))}
		</RadioGroup>
	),
};
