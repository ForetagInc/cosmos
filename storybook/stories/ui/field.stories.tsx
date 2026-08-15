import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle,
	Input,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Field',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Field style={{ width: 380 }}>
			<FieldLabel htmlFor="company">Company</FieldLabel>
			<Input id="company" placeholder="Foretag Ltd" />
			<FieldDescription>Shown on invoices and receipts.</FieldDescription>
		</Field>
	),
};

export const WithError: Story = {
	render: () => (
		<Field style={{ width: 380 }}>
			<FieldLabel htmlFor="vat">VAT number</FieldLabel>
			<Input id="vat" defaultValue="GB-00" aria-invalid />
			<FieldError>Enter a valid VAT number.</FieldError>
		</Field>
	),
};

export const Grouped: Story = {
	render: () => (
		<FieldSet style={{ width: 380 }}>
			<FieldLegend>Billing contact</FieldLegend>
			<FieldGroup>
				<Field>
					<FieldContent>
						<FieldTitle>Primary contact</FieldTitle>
						<FieldDescription>Receives all billing email.</FieldDescription>
					</FieldContent>
				</Field>
				<FieldSeparator />
				<Field>
					<FieldLabel htmlFor="billing-email">Email</FieldLabel>
					<Input id="billing-email" type="email" />
				</Field>
			</FieldGroup>
		</FieldSet>
	),
};
