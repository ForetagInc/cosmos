import { Alert, AlertDescription, AlertTitle } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Primitives/Alert',
	component: Alert,
	argTypes: {
		variant: { control: 'select', options: ['default', 'destructive'] },
	},
	args: { variant: 'default' },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Alert {...args} style={{ width: 460 }}>
			<AlertTitle>Scheduled maintenance</AlertTitle>
			<AlertDescription>
				Reporting will be unavailable on Sunday between 02:00 and 04:00 UTC.
			</AlertDescription>
		</Alert>
	),
};

export const TitleOnly: Story = {
	render: (args) => (
		<Alert {...args} style={{ width: 460 }}>
			<AlertTitle>Your changes have been saved.</AlertTitle>
		</Alert>
	),
};
