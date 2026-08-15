import { Kbd, KbdGroup } from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
	title: 'Primitives/Kbd',
};

export default meta;

type Story = StoryObj;

export const Single: Story = {
	render: () => <Kbd>⌘</Kbd>,
};

export const Combination: Story = {
	render: () => (
		<KbdGroup>
			<Kbd>⌘</Kbd>
			<Kbd>⇧</Kbd>
			<Kbd>P</Kbd>
		</KbdGroup>
	),
};
