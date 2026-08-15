import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils';

const inputVariants = cva(
	'caret-foreground bg-[var(--input-bg)] hover:bg-[var(--input-bg-hover)] border-0 shadow-[var(--input-shadow)] placeholder:text-[var(--input-placeholder)] text-[var(--input-fg)] transition-[color,background-color,border-color,box-shadow] relative w-full appearance-none rounded-md outline-none ring-0',
	{
		variants: {
			size: {
				base: 'h-9 px-2.5 py-2 text-sm',
				small: 'h-8 px-2 py-1.5 text-xs',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
);

export interface InputProps
	extends Omit<React.ComponentProps<'input'>, 'size'>,
		VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, size, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					inputVariants({ size }),
					'file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm',
					'focus:ring-0 focus-visible:shadow-[var(--input-shadow-focus)] focus-visible:ring-0',
					'disabled:cursor-not-allowed disabled:bg-[var(--input-disabled-bg)] disabled:text-[var(--input-disabled-fg)] disabled:placeholder:text-[var(--input-disabled-fg)]',
					'invalid:shadow-[var(--input-shadow-error)] aria-[invalid=true]:shadow-[var(--input-shadow-error)]',
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';

export { Input, inputVariants };
