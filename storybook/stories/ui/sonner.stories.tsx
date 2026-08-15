import { Button, toast, Toaster } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Toaster',
};

export default meta;

type Story = StoryObj;

export const Notifications: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12 }}>
			<Toaster />
			<Button onClick={() => toast('Order #1042 saved')}>Show toast</Button>
			<Button variant="outline" onClick={() => toast.error('Payment declined')}>
				Show error
			</Button>
		</div>
	),
};
