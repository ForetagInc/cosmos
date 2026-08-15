import { Tabs, TabsContent, TabsList, TabsTrigger } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Tabs',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="overview" style={{ width: 460 }}>
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="activity">Activity</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">Revenue is up 12% this month.</TabsContent>
			<TabsContent value="activity">Four orders were placed today.</TabsContent>
			<TabsContent value="settings">Manage workspace preferences.</TabsContent>
		</Tabs>
	),
};
