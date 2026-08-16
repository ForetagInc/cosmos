import { Field, FieldLabel, Switch } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/Switch',
};

export default meta;

type Story = StoryObj;

// Switch renders as a span, so Field is what gives it an accessible name.
export const WithLabel: Story = {
	render: () => {
		const [enabled, setEnabled] = useState(true);

		return (
			<Field orientation="horizontal">
				<Switch checked={enabled} onCheckedChange={setEnabled} />
				<FieldLabel>Auto-print receipts</FieldLabel>
			</Field>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<Field orientation="horizontal">
			<Switch disabled />
			<FieldLabel>Requires an upgrade</FieldLabel>
		</Field>
	),
};
