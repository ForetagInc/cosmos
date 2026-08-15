import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Command',
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {
	render: () => (
		<Command style={{ width: 460 }}>
			<CommandInput placeholder="Search commands..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Navigation">
					<CommandItem>
						Go to dashboard
						<CommandShortcut>⌘D</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Go to settings
						<CommandShortcut>⌘,</CommandShortcut>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Actions">
					<CommandItem>Create invoice</CommandItem>
					<CommandItem>Invite teammate</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
};
