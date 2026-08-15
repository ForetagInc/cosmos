import {
	Label,
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

const meta: Meta = {
	title: 'Primitives/Select',
};

export default meta;

type Story = StoryObj;

export const Grouped: Story = {
	render: () => (
		<div style={{ width: 280, display: 'grid', gap: 8 }}>
			<Label>Assignee</Label>
			<Select defaultValue="ada">
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
