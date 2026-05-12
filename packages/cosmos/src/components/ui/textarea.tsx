import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils';

const textareaVariants = cva(
	'caret-foreground bg-[var(--input-bg)] hover:bg-[var(--input-bg-hover)] border-0 shadow-[var(--input-shadow)] text-[var(--input-fg)] transition-[color,background-color,border-color,box-shadow] relative w-full appearance-none rounded-md outline-none ring-0 resize-y',
	{
		variants: {
			size: {
				base: 'min-h-20 px-2 py-1.5 text-sm placeholder:text-sm',
				small: 'min-h-16 px-2 py-1 text-xs placeholder:text-xs',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
);

interface TextareaProps
	extends React.ComponentProps<'textarea'>,
		VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, size, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					textareaVariants({ size }),
					'placeholder:text-[var(--input-placeholder)]',
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

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
