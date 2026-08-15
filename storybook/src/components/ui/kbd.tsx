import { cn } from '../utils';

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
	return (
		<kbd
			data-slot="kbd"
			className={cn(
				'pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded border border-ui-border-base bg-field px-1.5 font-medium font-sans text-[11px] text-ui-fg-subtle leading-none shadow-[inset_0_-1px_0_rgb(0_0_0/0.04)]',
				"[&_svg:not([class*='size-'])]:size-3.5",
				'in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10',
				className,
			)}
			{...props}
		/>
	);
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="kbd-group"
			className={cn('inline-flex items-center gap-1', className)}
			{...props}
		/>
	);
}

export { Kbd, KbdGroup };
