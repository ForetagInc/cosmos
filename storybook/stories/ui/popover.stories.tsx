import {
	Button,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Popover',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Set discount</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div style={{ display: 'grid', gap: 8 }}>
					<Label htmlFor="discount">Discount %</Label>
					<Input id="discount" defaultValue="10" />
				</div>
			</PopoverContent>
		</Popover>
	),
};
