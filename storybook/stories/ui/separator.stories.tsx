import { Separator } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Separator',
	component: Separator,
	argTypes: {
		orientation: {
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
		},
	},
	args: { orientation: 'horizontal' },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) =>
		args.orientation === 'vertical' ? (
			<div
				style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}
			>
				<span>Docs</span>
				<Separator {...args} />
				<span>API</span>
				<Separator {...args} />
				<span>Support</span>
			</div>
		) : (
			<div style={{ width: 320, display: 'grid', gap: 12 }}>
				<span>Account</span>
				<Separator {...args} />
				<span>Billing</span>
			</div>
		),
};
