import { Tooltip as TooltipPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={cn(
			'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-xs origin-[--radix-tooltip-content-transform-origin] animate-in overflow-hidden rounded-lg bg-ui-bg-component px-2.5 py-1 font-normal text-ui-fg-base text-xs leading-normal shadow-elevation-flyout data-[state=closed]:animate-out',
			className,
		)}
		{...props}
	/>
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
