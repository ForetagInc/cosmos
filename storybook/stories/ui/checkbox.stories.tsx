import { Checkbox, Field, FieldLabel } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/Checkbox',
};

export default meta;

type Story = StoryObj;

// Checkbox renders as a span, which `<label htmlFor>` cannot name — Field is what
// associates the label with the control.
export const WithLabel: Story = {
	render: () => {
		const [checked, setChecked] = useState(true);

		return (
			<Field orientation="horizontal">
				<Checkbox
					checked={checked}
					onCheckedChange={(value) => setChecked(value === true)}
				/>
				<FieldLabel>Email me product updates</FieldLabel>
			</Field>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<Field orientation="horizontal">
			<Checkbox disabled checked />
			<FieldLabel>Managed by your administrator</FieldLabel>
		</Field>
	),
};
