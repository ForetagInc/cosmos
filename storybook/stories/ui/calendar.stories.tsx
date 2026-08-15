import { Calendar } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
	title: 'Primitives/Calendar',
};

export default meta;

type Story = StoryObj;

export const SingleDate: Story = {
	render: () => {
		const [date, setDate] = useState<Date | undefined>(new Date(2026, 7, 15));

		return <Calendar mode="single" selected={date} onSelect={setDate} />;
	},
};

export const Embedded: Story = {
	render: () => <Calendar variant="embedded" mode="single" />,
};
