import { Badge } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Badge',
};

export default meta;

type Story = StoryObj;

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
			<Badge>Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	),
};
