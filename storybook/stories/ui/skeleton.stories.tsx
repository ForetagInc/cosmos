import { Skeleton } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Skeleton',
	component: Skeleton,
	argTypes: { className: { control: 'text' } },
	args: { className: 'h-4 w-full' },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div style={{ width: 360 }}>
			<Skeleton {...args} />
		</div>
	),
};

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
