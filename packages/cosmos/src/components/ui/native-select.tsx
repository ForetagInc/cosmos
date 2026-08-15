import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils';

const nativeSelectVariants = cva(
	'peer w-full appearance-none bg-none rounded-md border-0 bg-[var(--select-bg)] text-[var(--select-fg)] shadow-[var(--select-shadow)] transition-[color,background-color,border-color,box-shadow] hover:bg-[var(--select-bg-hover)] focus:outline-none focus-visible:shadow-[var(--select-shadow-focus)] focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-[var(--select-disabled-bg)] disabled:text-[var(--select-disabled-fg)] invalid:shadow-[var(--input-shadow-error)] aria-[invalid=true]:shadow-[var(--input-shadow-error)] [&::-ms-expand]:hidden',
	{
		variants: {
			size: {
				base: 'h-9 px-2.5 py-2 pr-8 text-sm',
				small: 'h-8 px-2 py-1.5 pr-8 text-xs',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
);

export interface NativeSelectProps
	extends Omit<React.ComponentProps<'select'>, 'size'>,
		VariantProps<typeof nativeSelectVariants> {}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
	({ className, size, children, ...props }, ref) => {
		return (
			<div className="relative w-full">
				<select
					ref={ref}
					className={cn(nativeSelectVariants({ size }), className)}
					{...props}
				>
					{children}
				</select>
				<span className="pointer-events-none absolute inset-y-0 right-2 flex flex-col items-center justify-center text-[var(--select-placeholder)]">
					<i className="ti ti-chevron-up -mb-0.5 text-lg" />
					<i className="ti ti-chevron-down -mt-0.5 text-lg" />
				</span>
			</div>
		);
	},
);

NativeSelect.displayName = 'NativeSelect';

export { NativeSelect, nativeSelectVariants };
