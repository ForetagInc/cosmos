import { ScrollArea as ScrollAreaPrimitive } from '@base-ui-components/react/scroll-area';
import type * as React from 'react';

import { cn } from '../utils';

function ScrollBar({
	className,
	orientation = 'vertical',
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			orientation={orientation}
			className={cn(
				'flex touch-none select-none transition-colors',
				orientation === 'vertical' &&
					'h-full w-2.5 border-l border-l-transparent p-px',
				orientation === 'horizontal' &&
					'h-2.5 flex-col border-t border-t-transparent p-px',
				className,
			)}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
		</ScrollAreaPrimitive.Scrollbar>
	);
}

function ScrollArea({
	className,
	children,
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
	return (
		<ScrollAreaPrimitive.Root
			className={cn('relative overflow-hidden', className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
				<ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
}

export { ScrollArea, ScrollBar };
