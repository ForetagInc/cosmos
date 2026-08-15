import { Checkbox, Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/Checkbox',
};

export default meta;

type Story = StoryObj;

export const WithLabel: Story = {
	render: () => {
		const [checked, setChecked] = useState(true);

		return (
			<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
				<Checkbox
					id="newsletter"
					checked={checked}
					onCheckedChange={(value) => setChecked(value === true)}
				/>
				<Label htmlFor="newsletter">Email me product updates</Label>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<Checkbox id="locked" disabled checked />
			<Label htmlFor="locked">Managed by your administrator</Label>
		</div>
	),
};
