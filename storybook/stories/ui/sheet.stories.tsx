import {
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Sheet',
	component: SheetContent,
	argTypes: {
		side: {
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
		},
		size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
	},
	args: { side: 'right', size: 'sm' },
} satisfies Meta<typeof SheetContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open filters</Button>
			</SheetTrigger>
			<SheetContent {...args}>
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
					<SheetDescription>
						Narrow the order list before exporting.
					</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Apply</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
};
