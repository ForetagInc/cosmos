import { Radio as RadioPrimitive } from '@base-ui-components/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui-components/react/radio-group';
import type * as React from 'react';

import { cn } from '../utils';

function RadioGroup({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
	return (
		<RadioGroupPrimitive className={cn('grid gap-2', className)} {...props} />
	);
}

function RadioGroupItem({
	className,
	...props
}: React.ComponentProps<typeof RadioPrimitive.Root>) {
	return (
		<RadioPrimitive.Root
			className={cn(
				'size-4 shrink-0 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-disabled:cursor-not-allowed data-disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioPrimitive.Indicator className="flex items-center justify-center">
				<span className="size-2 rounded-full bg-current" />
			</RadioPrimitive.Indicator>
		</RadioPrimitive.Root>
	);
}

export { RadioGroup, RadioGroupItem };
