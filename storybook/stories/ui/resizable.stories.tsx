import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Resizable',
	parameters: {
		// react-resizable-panels gives each panel its own overflow:auto wrapper that we
		// cannot add tabindex to, so this rule can never pass for the panel itself.
		a11y: {
			config: {
				rules: [{ id: 'scrollable-region-focusable', enabled: false }],
			},
		},
	},
};

export default meta;

type Story = StoryObj;

const panel: React.CSSProperties = {
	display: 'grid',
	placeItems: 'center',
	padding: 16,
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
