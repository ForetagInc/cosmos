import { Button } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Button',
};

export default meta;

type Story = StoryObj;

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
			<Button>Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="danger">Danger</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
			<Button size="sm">Small</Button>
			<Button>Default</Button>
			<Button size="lg">Large</Button>
			<Button size="icon" aria-label="Add">
				<i className="ti ti-plus" />
			</Button>
		</div>
	),
};

export const States: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12 }}>
			<Button disabled>Disabled</Button>
			<Button isLoading>Loading</Button>
		</div>
	),
};
