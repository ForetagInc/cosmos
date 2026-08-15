import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarSeparator,
	SidebarTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Sidebar',
	parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const sections = [
	{ label: 'Workspace', items: ['Dashboard', 'Orders', 'Products'] },
	{ label: 'Account', items: ['Billing', 'Members'] },
];

export const Default: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>Foretag</SidebarHeader>
				<SidebarSeparator />
				<SidebarContent>
					{sections.map((section) => (
						<SidebarGroup key={section.label}>
							<SidebarGroupLabel>{section.label}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									{section.items.map((item) => (
										<SidebarMenuItem key={item}>
											<SidebarMenuButton>{item}</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					))}
				</SidebarContent>
				<SidebarFooter>Signed in as Ada</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 12,
						padding: 16,
					}}
				>
					<SidebarTrigger />
					<strong>Dashboard</strong>
				</div>
			</SidebarInset>
		</SidebarProvider>
	),
};
