import {
	Button,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@foretag/cosmos';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const meta: Meta = {
	title: 'Primitives/Form',
};

export default meta;

type Story = StoryObj;

type ProfileValues = { displayName: string };

export const Validated: Story = {
	render: () => {
		const form = useForm<ProfileValues>({
			defaultValues: { displayName: '' },
		});
		const [saved, setSaved] = useState<string | null>(null);

		return (
			<Form {...form}>
				<form
					style={{ width: 380, display: 'grid', gap: 16 }}
					onSubmit={form.handleSubmit((values) => setSaved(values.displayName))}
				>
					<FormField
						control={form.control}
						name="displayName"
						rules={{ required: 'Display name is required.' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Display name</FormLabel>
								<FormControl>
									<Input placeholder="Ada Lovelace" {...field} />
								</FormControl>
								<FormDescription>Shown next to your comments.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Save</Button>
					{saved ? <p>Saved “{saved}”.</p> : null}
				</form>
			</Form>
		);
	},
};
