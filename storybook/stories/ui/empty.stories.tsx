import {
	Button,
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Empty',
};

export default meta;

type Story = StoryObj;

export const NoResults: Story = {
	render: () => (
		<Empty style={{ width: 460 }}>
			<EmptyHeader>
				<EmptyMedia>
					<i className="ti ti-inbox text-2xl" />
				</EmptyMedia>
				<EmptyTitle>No invoices yet</EmptyTitle>
				<EmptyDescription>
					Invoices appear here once an order is marked as paid.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button size="sm">Create invoice</Button>
			</EmptyContent>
		</Empty>
	),
};
