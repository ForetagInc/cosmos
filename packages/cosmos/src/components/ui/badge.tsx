import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '../utils';

const badgeVariants = cva(
	'inline-flex items-center rounded-md border px-2 py-0.5 font-medium text-[11px] uppercase tracking-wide transition-[color,background-color,border-color,box-shadow] [background:var(--badge-bg)] [border-color:var(--badge-border)] [color:var(--badge-fg)] shadow-[var(--badge-shadow)] focus:outline-none focus-visible:shadow-[var(--borders-interactive-with-active)]',
	{
		variants: {
			variant: {
				default:
					'[--badge-bg:var(--button-primary-bg)] [--badge-border:var(--button-primary-border)] [--badge-fg:var(--button-primary-fg)] [--badge-shadow:inset_0_1px_0_rgb(255_255_255_/_0.1)]',
				secondary:
					'[--badge-bg:var(--button-secondary-bg)] [--badge-border:var(--button-secondary-border)] [--badge-fg:var(--button-secondary-fg)] [--badge-shadow:var(--button-shadow-secondary)]',
				destructive:
					'[--badge-bg:var(--button-danger-bg)] [--badge-border:var(--button-danger-border)] [--badge-fg:var(--button-danger-fg)] [--badge-shadow:var(--button-shadow-danger)]',
				outline:
					'[--badge-bg:color-mix(in_oklab,var(--field),transparent_24%)] [--badge-border:var(--ui-border-base)] [--badge-fg:var(--ui-fg-base)] [--badge-shadow:none]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
