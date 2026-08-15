import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Tooltip',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" aria-label="Refresh">
						<i className="ti ti-refresh" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Refresh the order list</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
};
