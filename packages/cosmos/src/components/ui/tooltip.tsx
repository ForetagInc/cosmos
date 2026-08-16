import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip';
import type * as React from 'react';
import { cn } from '../utils';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Popup> &
	Pick<
		React.ComponentProps<typeof TooltipPrimitive.Positioner>,
		'side' | 'align' | 'sideOffset'
	>;

function TooltipContent({
	className,
	align,
	side,
	sideOffset = 4,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Positioner
				align={align}
				side={side}
				sideOffset={sideOffset}
				className="z-50"
			>
				<TooltipPrimitive.Popup
					className={cn(
						'max-w-xs origin-(--transform-origin) overflow-hidden rounded-lg bg-ui-bg-component px-2.5 py-1 font-normal text-ui-fg-base text-xs leading-normal shadow-elevation-flyout transition-[opacity,transform] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
						className,
					)}
					{...props}
				/>
			</TooltipPrimitive.Positioner>
		</TooltipPrimitive.Portal>
	);
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
