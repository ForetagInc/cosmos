import { Checkbox as CheckboxPrimitive } from '@base-ui-components/react/checkbox';
import type * as React from 'react';
import { cn } from '../utils';

function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			className={cn(
				'peer inline-flex size-4 shrink-0 items-center justify-center rounded-sm border shadow-[var(--checkbox-shadow,var(--borders-base))] outline-none transition-[background-color,border-color,box-shadow,color] [background:var(--checkbox-bg,var(--input-bg))] [border-color:var(--checkbox-border,var(--surface-border-base))] [color:transparent] focus-visible:shadow-[var(--borders-interactive-with-active)] data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:shadow-[var(--checkbox-checked-shadow,var(--button-shadow-primary))] data-indeterminate:shadow-[var(--checkbox-checked-shadow,var(--button-shadow-primary))] hover:[background:var(--checkbox-bg-hover,var(--input-bg-hover))] hover:[border-color:var(--checkbox-border-hover,var(--checkbox-border,var(--surface-border-base)))] data-checked:[background:var(--checkbox-checked-bg,var(--button-primary-bg))] data-checked:[border-color:var(--checkbox-checked-border,var(--button-primary-border))] data-checked:[color:var(--checkbox-checked-fg,var(--button-primary-fg))] data-indeterminate:[background:var(--checkbox-checked-bg,var(--button-primary-bg))] data-indeterminate:[border-color:var(--checkbox-checked-border,var(--button-primary-border))] data-indeterminate:[color:var(--checkbox-checked-fg,var(--button-primary-fg))]',
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator className="flex items-center justify-center">
				<i className="ti ti-check stroke-[2.75] text-lg" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
