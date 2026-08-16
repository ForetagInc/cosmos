import { Label, NativeSelect } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/NativeSelect',
	component: NativeSelect,
	argTypes: {
		size: { control: 'select', options: ['base', 'small'] },
		disabled: { control: 'boolean' },
	},
	args: { size: 'base', defaultValue: 'GBP', disabled: false },
} satisfies Meta<typeof NativeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div style={{ width: 280, display: 'grid', gap: 8 }}>
			<Label htmlFor="currency">Currency</Label>
			<NativeSelect id="currency" {...args}>
				<option value="GBP">Pound sterling</option>
				<option value="EUR">Euro</option>
				<option value="USD">US dollar</option>
			</NativeSelect>
		</div>
	),
};
