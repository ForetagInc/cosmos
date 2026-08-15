import { Textarea } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Textarea',
	component: Textarea,
	argTypes: {
		size: { control: 'select', options: ['base', 'small'] },
		rows: { control: { type: 'number', min: 1, max: 12 } },
		disabled: { control: 'boolean' },
	},
	args: {
		size: 'base',
		rows: 4,
		placeholder: 'Leave with the neighbour',
		disabled: false,
	},
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
