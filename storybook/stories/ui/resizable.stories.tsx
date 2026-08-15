import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Resizable',
};

export default meta;

type Story = StoryObj;

const panel: React.CSSProperties = {
	display: 'grid',
	placeItems: 'center',
	height: '100%',
};

export const Horizontal: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="horizontal"
			style={{ width: 620, height: 240, border: '1px solid var(--border)' }}
		>
			<ResizablePanel defaultSize={30}>
				<div style={panel}>Sidebar</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel>
				<div style={panel}>Content</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
};

export const Vertical: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="vertical"
			style={{ width: 480, height: 300, border: '1px solid var(--border)' }}
		>
			<ResizablePanel defaultSize={60}>
				<div style={panel}>Editor</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel>
				<div style={panel}>Console</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
};
