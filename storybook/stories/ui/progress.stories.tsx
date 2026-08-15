import { Progress } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Progress',
	component: Progress,
	argTypes: {
		value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
	},
	args: { value: 35 },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div style={{ width: 380 }}>
			<Progress {...args} />
		</div>
	),
};
