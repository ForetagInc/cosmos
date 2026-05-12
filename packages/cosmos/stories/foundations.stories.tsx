import type { Meta, StoryObj } from '@storybook/react';
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	Label,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	Textarea,
} from '../src';

const meta: Meta = {
	title: 'Cosmos UI/Foundations',
};

export default meta;

type Story = StoryObj;

export const Buttons: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
			<Button>Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
		</div>
	),
};

export const Inputs: Story = {
	render: () => (
		<div style={{ width: 360, display: 'grid', gap: 12 }}>
			<div style={{ display: 'grid', gap: 8 }}>
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="name@foretag.co" />
			</div>
			<div style={{ display: 'grid', gap: 8 }}>
				<Label htmlFor="notes">Notes</Label>
				<Textarea id="notes" placeholder="Write your notes..." />
			</div>
		</div>
	),
};

export const CardAndTabs: Story = {
	render: () => (
		<Card style={{ width: 560 }}>
			<CardHeader>
				<CardTitle>Design Foundations</CardTitle>
				<CardDescription>
					Shared primitives and themes for Cosmos UI.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="tokens">
					<TabsList>
						<TabsTrigger value="tokens">Tokens</TabsTrigger>
						<TabsTrigger value="components">Components</TabsTrigger>
					</TabsList>
					<TabsContent value="tokens">
						Semantic color + type scales.
					</TabsContent>
					<TabsContent value="components">
						Composable React primitives.
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	),
};
