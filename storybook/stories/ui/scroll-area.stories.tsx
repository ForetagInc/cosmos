import { ScrollArea, ScrollBar, Separator } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/ScrollArea',
};

export default meta;

type Story = StoryObj;

const orders = Array.from({ length: 24 }, (_, i) => `Order #${1000 + i}`);

export const Vertical: Story = {
	render: () => (
		<ScrollArea
			style={{ height: 240, width: 300, border: '1px solid var(--border)' }}
		>
			<div style={{ padding: 12 }}>
				{orders.map((order) => (
					<div key={order}>
						<div style={{ padding: '8px 0' }}>{order}</div>
						<Separator />
					</div>
				))}
			</div>
		</ScrollArea>
	),
};

export const Horizontal: Story = {
	render: () => (
		<ScrollArea style={{ width: 420, border: '1px solid var(--border)' }}>
			<div style={{ display: 'flex', gap: 12, padding: 12 }}>
				{orders.slice(0, 10).map((order) => (
					<div key={order} style={{ minWidth: 140 }}>
						{order}
					</div>
				))}
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	),
};
