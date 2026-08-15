import { Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Label',
	component: Label,
	argTypes: {
		size: {
			control: 'select',
			options: ['xsmall', 'small', 'base', 'large'],
		},
		weight: { control: 'select', options: ['regular', 'plus'] },
	},
	args: { size: 'base', weight: 'regular', children: 'Reference' },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
