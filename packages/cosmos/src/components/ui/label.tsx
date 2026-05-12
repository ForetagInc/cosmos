import { cva, type VariantProps } from 'class-variance-authority';
import { Label as LabelPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../utils';

const labelVariants = cva(
	'inline-flex items-center gap-1 text-[var(--label-fg)] select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
	{
		variants: {
			size: {
				xsmall: 'text-[10px] leading-3',
				small: 'text-xs leading-4',
				base: 'text-sm leading-5',
				large: 'text-base leading-6',
			},
			weight: {
				regular: 'font-normal',
				plus: 'font-medium',
			},
		},
		defaultVariants: {
			size: 'base',
			weight: 'regular',
		},
	},
);

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(props), className)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
