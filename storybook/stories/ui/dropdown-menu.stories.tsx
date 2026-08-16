import {
	Button,
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/DropdownMenu',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger render={<Button variant="outline" />}>
				Options
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{/* A label describes its group, so it must sit inside DropdownMenuGroup. */}
				<DropdownMenuGroup>
					<DropdownMenuLabel>Workspace</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>Invite members</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Sign out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithCheckboxes: Story = {
	render: () => {
		const [archived, setArchived] = useState(false);

		return (
			<DropdownMenu>
				<DropdownMenuTrigger render={<Button variant="outline" />}>
					Filters
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuCheckboxItem
						checked={archived}
						onCheckedChange={setArchived}
					>
						Show archived
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
};
