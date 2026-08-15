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

const meta = {
	title: 'Primitives/Sidebar',
	component: Sidebar,
	parameters: { layout: 'fullscreen' },
	argTypes: {
		side: { control: 'inline-radio', options: ['left', 'right'] },
		variant: {
			control: 'select',
			options: ['sidebar', 'floating', 'inset'],
		},
		collapsible: {
			control: 'select',
			options: ['offcanvas', 'icon', 'none'],
		},
	},
	args: { side: 'left', variant: 'sidebar', collapsible: 'offcanvas' },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const sections = [
	{ label: 'Workspace', items: ['Dashboard', 'Orders', 'Products'] },
	{ label: 'Account', items: ['Billing', 'Members'] },
];

export const Default: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar {...args}>
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
