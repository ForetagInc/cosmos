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

const meta = {
	title: 'Primitives/Empty',
	component: EmptyMedia,
	argTypes: {
		variant: { control: 'select', options: ['default', 'icon'] },
	},
	args: { variant: 'icon' },
} satisfies Meta<typeof EmptyMedia>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoResults: Story = {
	render: (args) => (
		<Empty style={{ width: 460 }}>
			<EmptyHeader>
				<EmptyMedia {...args}>
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
