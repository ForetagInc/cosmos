import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Accordion',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Accordion multiple={false} style={{ width: 420 }}>
			<AccordionItem value="shipping">
				<AccordionTrigger>Shipping</AccordionTrigger>
				<AccordionContent>
					Orders placed before 14:00 ship the same working day.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="returns">
				<AccordionTrigger>Returns</AccordionTrigger>
				<AccordionContent>
					Unused items can be returned within 30 days.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion style={{ width: 420 }}>
			<AccordionItem value="one">
				<AccordionTrigger>First section</AccordionTrigger>
				<AccordionContent>Both sections can be open at once.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="two">
				<AccordionTrigger>Second section</AccordionTrigger>
				<AccordionContent>No item closes another.</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
