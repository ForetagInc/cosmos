import { Skeleton } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Skeleton',
};

export default meta;

type Story = StoryObj;

export const LoadingRow: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 360 }}>
			<Skeleton className="size-10 rounded-full" />
			<div style={{ display: 'grid', gap: 8, flex: 1 }}>
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-2/3" />
			</div>
		</div>
	),
};
