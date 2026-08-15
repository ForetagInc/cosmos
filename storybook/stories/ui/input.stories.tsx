import { Input } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Input',
	component: Input,
	argTypes: {
		size: { control: 'select', options: ['base', 'small'] },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
	},
	args: {
		size: 'base',
		placeholder: 'name@foretag.co',
		disabled: false,
		readOnly: false,
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
	args: { defaultValue: 'not-an-email', 'aria-invalid': true },
};
