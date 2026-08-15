import { Button } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Button',
	component: Button,
	argTypes: {
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'xl', 'icon'],
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'primary',
				'destructive',
				'danger',
				'outline',
				'secondary',
				'ghost',
				'transparent',
				'link',
			],
		},
		isLoading: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
	args: {
		children: 'Button',
		size: 'default',
		variant: 'default',
		isLoading: false,
		disabled: false,
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
	args: {
		size: 'icon',
		children: <i className="ti ti-plus" />,
		'aria-label': 'Add',
	},
};

export const Loading: Story = {
	args: { isLoading: true, children: 'Saving' },
};
