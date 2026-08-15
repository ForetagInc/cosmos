import {
	Choicebox,
	ChoiceboxItem,
	ChoiceboxItemDescription,
	ChoiceboxItemHeader,
	ChoiceboxItemSubtitle,
	ChoiceboxItemTitle,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Choicebox',
};

export default meta;

type Story = StoryObj;

const plans = [
	{
		value: 'starter',
		title: 'Starter',
		subtitle: 'Free',
		description: 'One workspace and up to three collaborators.',
	},
	{
		value: 'team',
		title: 'Team',
		subtitle: '£24 / month',
		description: 'Unlimited workspaces with shared billing.',
	},
];

export const PlanPicker: Story = {
	render: () => (
		<Choicebox defaultValue="team" style={{ width: 460 }}>
			{plans.map((plan) => (
				<ChoiceboxItem key={plan.value} value={plan.value}>
					<ChoiceboxItemHeader>
						<ChoiceboxItemTitle>{plan.title}</ChoiceboxItemTitle>
						<ChoiceboxItemSubtitle>{plan.subtitle}</ChoiceboxItemSubtitle>
					</ChoiceboxItemHeader>
					<ChoiceboxItemDescription>
						{plan.description}
					</ChoiceboxItemDescription>
				</ChoiceboxItem>
			))}
		</Choicebox>
	),
};
