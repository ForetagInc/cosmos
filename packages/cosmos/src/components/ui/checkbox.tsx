import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../utils';

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer inline-flex size-4 shrink-0 items-center justify-center rounded-sm border shadow-[var(--checkbox-shadow,var(--borders-base))] outline-none transition-[background-color,border-color,box-shadow,color] [background:var(--checkbox-bg,var(--input-bg))] [border-color:var(--checkbox-border,var(--surface-border-base))] [color:transparent] focus-visible:shadow-[var(--borders-interactive-with-active)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:shadow-[var(--checkbox-checked-shadow,var(--button-shadow-primary))] data-[state=indeterminate]:shadow-[var(--checkbox-checked-shadow,var(--button-shadow-primary))] hover:[background:var(--checkbox-bg-hover,var(--input-bg-hover))] hover:[border-color:var(--checkbox-border-hover,var(--checkbox-border,var(--surface-border-base)))] data-[state=checked]:[background:var(--checkbox-checked-bg,var(--button-primary-bg))] data-[state=checked]:[border-color:var(--checkbox-checked-border,var(--button-primary-border))] data-[state=checked]:[color:var(--checkbox-checked-fg,var(--button-primary-fg))] data-[state=indeterminate]:[background:var(--checkbox-checked-bg,var(--button-primary-bg))] data-[state=indeterminate]:[border-color:var(--checkbox-checked-border,var(--button-primary-border))] data-[state=indeterminate]:[color:var(--checkbox-checked-fg,var(--button-primary-fg))]',
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className="flex items-center justify-center">
			<i className="ti ti-check stroke-[2.75] text-lg" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
