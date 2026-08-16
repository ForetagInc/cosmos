import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar';
import { tv, type VariantProps } from 'tailwind-variants';
import type * as React from 'react';

import { cn } from '../utils';

const avatarVariants = tv({
	base: 'relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-ui-border-base bg-background p-(--avatar-padding) text-foreground shadow-[0_1px_2px_rgb(0_0_0_/_0.08)] [--avatar-padding:2px]',
	variants: {
		variant: {
			// Inner radius is concentric with the outer one: outer radius minus the
			// padding that separates them, so the gap stays even around the curve.
			square:
				'rounded-md [--avatar-inner-radius:calc(var(--radius-md)-var(--avatar-padding))]',
			circle: 'rounded-full [--avatar-inner-radius:9999px]',
		},
		size: {
			'2xsmall': 'size-4 text-[10px]',
			xsmall: 'size-5 text-[11px]',
			small: 'size-6 text-xs',
			base: 'size-7 text-xs',
			large: 'size-8 text-sm',
			xlarge: 'size-10 text-sm',
		},
	},
	defaultVariants: {
		variant: 'square',
		size: 'base',
	},
});

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
	VariantProps<typeof avatarVariants>;

function Avatar({ className, variant, size, ...props }: AvatarProps) {
	return (
		<AvatarPrimitive.Root
			className={cn(avatarVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

function AvatarImage({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
	return (
		<AvatarPrimitive.Image
			className={cn(
				'aspect-square size-full rounded-(--avatar-inner-radius) object-cover',
				className,
			)}
			{...props}
		/>
	);
}

function AvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
	return (
		<AvatarPrimitive.Fallback
			className={cn(
				'flex size-full items-center justify-center rounded-(--avatar-inner-radius) bg-muted font-medium text-muted-foreground',
				className,
			)}
			{...props}
		/>
	);
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
