import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Dialog',
};

export default meta;

type Story = StoryObj;

export const WithForm: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger render={<Button />}>Rename workspace</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Rename workspace</DialogTitle>
					<DialogDescription>
						Everyone in the workspace will see the new name.
					</DialogDescription>
				</DialogHeader>
				<div style={{ display: 'grid', gap: 8 }}>
					<Label htmlFor="workspace-name">Name</Label>
					<Input id="workspace-name" defaultValue="Foretag" />
				</div>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						Cancel
					</DialogClose>
					<Button>Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
