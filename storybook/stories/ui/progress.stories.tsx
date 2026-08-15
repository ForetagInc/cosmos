import { Progress } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Progress',
};

export default meta;

type Story = StoryObj;

export const Steps: Story = {
	render: () => (
		<div style={{ width: 380, display: 'grid', gap: 16 }}>
			<Progress value={0} />
			<Progress value={35} />
			<Progress value={100} />
		</div>
	),
};
