import {
	Button,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Collapsible',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Collapsible style={{ width: 420, display: 'grid', gap: 8 }}>
			<CollapsibleTrigger asChild>
				<Button variant="outline">Advanced options</Button>
			</CollapsibleTrigger>
			<CollapsibleContent>
				Requests retry three times before failing.
			</CollapsibleContent>
		</Collapsible>
	),
};
