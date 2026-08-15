import { Label, Switch } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/Switch',
};

export default meta;

type Story = StoryObj;

export const WithLabel: Story = {
	render: () => {
		const [enabled, setEnabled] = useState(true);

		return (
			<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
				<Switch
					id="auto-print"
					checked={enabled}
					onCheckedChange={setEnabled}
				/>
				<Label htmlFor="auto-print">Auto-print receipts</Label>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<Switch id="locked-toggle" disabled />
			<Label htmlFor="locked-toggle">Requires an upgrade</Label>
		</div>
	),
};
