import { Alert, AlertDescription, AlertTitle } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Alert',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Alert style={{ width: 460 }}>
			<AlertTitle>Scheduled maintenance</AlertTitle>
			<AlertDescription>
				Reporting will be unavailable on Sunday between 02:00 and 04:00 UTC.
			</AlertDescription>
		</Alert>
	),
};

export const TitleOnly: Story = {
	render: () => (
		<Alert style={{ width: 460 }}>
			<AlertTitle>Your changes have been saved.</AlertTitle>
		</Alert>
	),
};
