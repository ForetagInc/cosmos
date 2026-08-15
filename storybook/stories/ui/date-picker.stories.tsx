import { DatePicker, Label } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/DatePicker',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => {
		const [date, setDate] = useState<Date | undefined>();

		return (
			<div style={{ width: 280, display: 'grid', gap: 8 }}>
				<Label>Delivery date</Label>
				<DatePicker date={date} onSelect={setDate} placeholder="Pick a date" />
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<div style={{ width: 280 }}>
			<DatePicker disabled onSelect={() => undefined} />
		</div>
	),
};
