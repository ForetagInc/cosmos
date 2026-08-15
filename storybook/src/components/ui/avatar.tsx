import { cn } from '../utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from 'react';

const avatarVariants = cva(
	'relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-ui-border-base bg-background p-0.5 text-foreground shadow-[0_1px_2px_rgb(0_0_0_/_0.08)]',
	{
		variants: {
			variant: {
				squared: 'rounded-md [--avatar-inner-radius:calc(var(--radius)-3px)]',
				rounded: 'rounded-full [--avatar-inner-radius:9999px]',
				square: 'rounded-md [--avatar-inner-radius:calc(var(--radius)-3px)]',
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
	},
);

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
	VariantProps<typeof avatarVariants>;

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	AvatarProps
>(({ className, variant, size, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(avatarVariants({ variant, size }), className)}
		{...props}
	/>
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn(
			'block aspect-square size-full rounded-(--avatar-inner-radius) bg-background object-cover',
			className,
		)}
		{...props}
	/>
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(
			'flex size-full select-none items-center justify-center rounded-(--avatar-inner-radius) bg-muted font-medium text-[0.72em] text-muted-foreground uppercase leading-none tracking-[0.02em]',
			className,
		)}
		{...props}
	/>
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
