import type { Meta, StoryObj } from '@storybook/react-vite';
import * as CosmosUi from '../src/components/ui';

const meta: Meta = {
	title: 'Cosmos UI/Primitives Registry',
};

export default meta;

type Story = StoryObj;

export const AllPrimitivesRegistry: Story = {
	render: () => (
		<div style={{ width: '100%', maxWidth: 860 }}>
			<h2 style={{ marginBottom: 12, fontSize: 20, fontWeight: 700 }}>
				All Cosmos UI Primitive Exports
			</h2>
			<p style={{ marginBottom: 16 }}>
				These exports are copied from Workshop primitives and available from{' '}
				<code>@foretag/cosmos</code>.
			</p>
			<ul style={{ columns: 2, gap: 24 }}>
				{Object.keys(CosmosUi)
					.sort()
					.map((name) => (
						<li key={name} style={{ marginBottom: 8 }}>
							<code>{name}</code>
						</li>
					))}
			</ul>
		</div>
	),
};
