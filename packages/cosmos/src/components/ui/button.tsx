import { useRender } from '@base-ui-components/react/use-render';
import { tv, type VariantProps } from 'tailwind-variants';
import * as React from 'react';
import { cn } from '../utils';

const buttonVariants = tv({
	base: 'relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md border font-medium outline-none transition-[color,background-color,border-color,box-shadow] [background:var(--btn-bg)] [border-color:var(--btn-border)] [color:var(--btn-fg)] shadow-[var(--btn-shadow)] hover:[background:var(--btn-bg-hover)] hover:[border-color:var(--btn-border-hover)] active:[background:var(--btn-bg-active)] active:[border-color:var(--btn-border-active)] active:shadow-[var(--btn-shadow-active)] focus-visible:shadow-[var(--borders-interactive-with-active)] focus-visible:ring-0 disabled:cursor-not-allowed disabled:[background:var(--button-disabled-bg,var(--muted))] disabled:[border-color:var(--button-disabled-border,var(--ui-border-base))] disabled:[color:var(--button-disabled-fg,var(--muted-foreground))] disabled:opacity-60 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	variants: {
		variant: {
			default:
				'[--btn-bg:var(--button-primary-bg)] [--btn-bg-hover:var(--button-primary-bg-hover)] [--btn-bg-active:var(--button-primary-bg-active)] [--btn-border:var(--button-primary-border)] [--btn-border-hover:var(--button-primary-border-hover,var(--button-primary-border))] [--btn-border-active:var(--button-primary-border-active,var(--button-primary-border))] [--btn-fg:var(--button-primary-fg)] [--btn-shadow:var(--button-shadow-primary)] [--btn-shadow-active:var(--button-shadow-primary-active,var(--button-shadow-primary))]',
			primary:
				'[--btn-bg:var(--button-primary-bg)] [--btn-bg-hover:var(--button-primary-bg-hover)] [--btn-bg-active:var(--button-primary-bg-active)] [--btn-border:var(--button-primary-border)] [--btn-border-hover:var(--button-primary-border-hover,var(--button-primary-border))] [--btn-border-active:var(--button-primary-border-active,var(--button-primary-border))] [--btn-fg:var(--button-primary-fg)] [--btn-shadow:var(--button-shadow-primary)] [--btn-shadow-active:var(--button-shadow-primary-active,var(--button-shadow-primary))]',
			destructive:
				'[--btn-bg:var(--button-danger-bg)] [--btn-bg-hover:var(--button-danger-bg-hover)] [--btn-bg-active:var(--button-danger-bg-active)] [--btn-border:var(--button-danger-border)] [--btn-border-hover:var(--button-danger-border-hover,var(--button-danger-border))] [--btn-border-active:var(--button-danger-border-active,var(--button-danger-border))] [--btn-fg:var(--button-danger-fg)] [--btn-shadow:var(--button-shadow-danger)] [--btn-shadow-active:var(--button-shadow-danger-active,var(--button-shadow-danger))]',
			danger:
				'[--btn-bg:var(--button-danger-bg)] [--btn-bg-hover:var(--button-danger-bg-hover)] [--btn-bg-active:var(--button-danger-bg-active)] [--btn-border:var(--button-danger-border)] [--btn-border-hover:var(--button-danger-border-hover,var(--button-danger-border))] [--btn-border-active:var(--button-danger-border-active,var(--button-danger-border))] [--btn-fg:var(--button-danger-fg)] [--btn-shadow:var(--button-shadow-danger)] [--btn-shadow-active:var(--button-shadow-danger-active,var(--button-shadow-danger))]',
			outline:
				'[--btn-bg:var(--button-secondary-bg)] [--btn-bg-hover:var(--button-secondary-bg-hover)] [--btn-bg-active:var(--button-secondary-bg-active)] [--btn-border:var(--button-secondary-border)] [--btn-border-hover:var(--button-secondary-border-hover,var(--button-secondary-border))] [--btn-border-active:var(--button-secondary-border-active,var(--button-secondary-border))] [--btn-fg:var(--button-secondary-fg)] [--btn-shadow:var(--button-shadow-secondary)] [--btn-shadow-active:var(--button-shadow-secondary-active,var(--button-shadow-secondary))]',
			secondary:
				'[--btn-bg:var(--button-secondary-bg)] [--btn-bg-hover:var(--button-secondary-bg-hover)] [--btn-bg-active:var(--button-secondary-bg-active)] [--btn-border:var(--button-secondary-border)] [--btn-border-hover:var(--button-secondary-border-hover,var(--button-secondary-border))] [--btn-border-active:var(--button-secondary-border-active,var(--button-secondary-border))] [--btn-fg:var(--button-secondary-fg)] [--btn-shadow:var(--button-shadow-secondary)] [--btn-shadow-active:var(--button-shadow-secondary-active,var(--button-shadow-secondary))]',
			ghost:
				'[--btn-bg:transparent] [--btn-bg-hover:var(--accent)] [--btn-bg-active:var(--accent)] [--btn-border:transparent] [--btn-border-hover:transparent] [--btn-border-active:transparent] [--btn-fg:var(--foreground)] [--btn-shadow:none] [--btn-shadow-active:none] hover:[color:var(--accent-foreground)]',
			transparent:
				'[--btn-bg:transparent] [--btn-bg-hover:var(--accent)] [--btn-bg-active:var(--accent)] [--btn-border:transparent] [--btn-border-hover:transparent] [--btn-border-active:transparent] [--btn-fg:var(--foreground)] [--btn-shadow:none] [--btn-shadow-active:none] hover:[color:var(--accent-foreground)]',
			link: '[--btn-bg:transparent] [--btn-bg-hover:transparent] [--btn-bg-active:transparent] [--btn-border:transparent] [--btn-border-hover:transparent] [--btn-border-active:transparent] [--btn-fg:var(--primary)] [--btn-shadow:none] [--btn-shadow-active:none] underline-offset-4 hover:underline',
		},
		size: {
			default: 'gap-1.5 px-3 py-1.5 text-sm',
			sm: 'gap-1.5 px-2 py-1 text-xs',
			lg: 'gap-1.5 px-4 py-2.5 text-sm',
			xl: 'gap-1.5 px-5 py-3.5 text-base',
			icon: 'h-9 w-9 p-0',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	/** Render as a different element, e.g. `render={<a href="/" />}`. */
	render?: useRender.RenderProp;
	isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			render,
			isLoading = false,
			children,
			disabled,
			...props
		},
		ref,
	) => {
		const content = isLoading ? (
			<>
				<svg
					viewBox="0 0 24 24"
					className="size-4 animate-spin"
					aria-hidden="true"
				>
					<circle
						cx="12"
						cy="12"
						r="10"
						fill="none"
						stroke="currentColor"
						strokeOpacity="0.25"
						strokeWidth="4"
					/>
					<path
						d="M22 12a10 10 0 0 1-10 10"
						fill="none"
						stroke="currentColor"
						strokeWidth="4"
						strokeLinecap="round"
					/>
				</svg>
				<span>{children}</span>
			</>
		) : (
			children
		);

		return useRender({
			render,
			ref,
			defaultTagName: 'button',
			props: {
				className: cn(buttonVariants({ variant, size, className })),
				disabled: disabled || isLoading,
				children: content,
				...props,
			},
		});
	},
);

Button.displayName = 'Button';

export { Button, buttonVariants };
