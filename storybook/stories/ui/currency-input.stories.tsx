import { CurrencyInput } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/CurrencyInput',
	component: CurrencyInput,
	argTypes: {
		size: { control: 'select', options: ['base', 'small'] },
		code: { control: 'text' },
		symbol: { control: 'text' },
		disabled: { control: 'boolean' },
	},
	args: {
		size: 'base',
		code: 'GBP',
		symbol: '£',
		defaultValue: '24.00',
		disabled: false,
	},
} satisfies Meta<typeof CurrencyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div style={{ width: 280 }}>
			<CurrencyInput {...args} />
		</div>
	),
};
