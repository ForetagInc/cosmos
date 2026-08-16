import { Popover as PopoverPrimitive } from '@base-ui-components/react/popover';
import type * as React from 'react';

import { cn } from '../utils';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

type PopoverContentProps = React.ComponentProps<typeof PopoverPrimitive.Popup> &
	Pick<
		React.ComponentProps<typeof PopoverPrimitive.Positioner>,
		'side' | 'align' | 'sideOffset' | 'anchor'
	>;

function PopoverContent({
	className,
	align = 'center',
	side,
	sideOffset = 4,
	anchor,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Positioner
				align={align}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
				className="z-50"
			>
				<PopoverPrimitive.Popup
					className={cn(
						'w-72 origin-(--transform-origin) rounded-md border border-[var(--surface-border-base)] bg-[var(--popover-surface-bg)] p-4 text-[var(--popover-surface-fg)] shadow-[var(--popover-surface-shadow)] outline-none transition-[opacity,transform] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
						className,
					)}
					{...props}
				/>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	);
}

export { Popover, PopoverTrigger, PopoverContent };
