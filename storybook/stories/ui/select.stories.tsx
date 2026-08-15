import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

// `size` lives on the Select root and reaches the trigger and items via context.
const meta = {
	title: 'Primitives/Select',
	component: Select,
	argTypes: {
		size: { control: 'select', options: ['base', 'small'] },
	},
	args: { size: 'base' },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grouped: Story = {
	render: (args) => (
		<div style={{ width: 280 }}>
			<Select {...args} defaultValue="ada">
				<SelectTrigger>
					<SelectValue placeholder="Select a teammate" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Engineering</SelectLabel>
						<SelectItem value="ada">Ada Lovelace</SelectItem>
						<SelectItem value="alan">Alan Turing</SelectItem>
					</SelectGroup>
					<SelectSeparator />
					<SelectGroup>
						<SelectLabel>Design</SelectLabel>
						<SelectItem value="eva">Eva Zeisel</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	),
};
