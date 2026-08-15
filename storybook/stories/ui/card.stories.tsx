import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Card',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Card style={{ width: 420 }}>
			<CardHeader>
				<CardTitle>Monthly revenue</CardTitle>
				<CardDescription>Compared with the previous period.</CardDescription>
			</CardHeader>
			<CardContent>£48,210 across 1,204 orders.</CardContent>
			<CardFooter>
				<Button size="sm">View report</Button>
			</CardFooter>
		</Card>
	),
};
