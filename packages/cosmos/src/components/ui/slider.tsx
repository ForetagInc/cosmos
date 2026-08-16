import { Slider as SliderPrimitive } from '@base-ui-components/react/slider';
import * as React from 'react';

import { cn } from '../utils';

function Slider({
	className,
	defaultValue,
	value,
	...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
	const thumbCount = React.useMemo(() => {
		const resolved = value ?? defaultValue;
		return Array.isArray(resolved) ? resolved.length : 1;
	}, [value, defaultValue]);

	return (
		<SliderPrimitive.Root
			defaultValue={defaultValue}
			value={value}
			className={cn(
				'relative w-full select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto',
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Control className="flex w-full touch-none items-center py-2 select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col">
				<SliderPrimitive.Track className="relative w-full grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1">
					<SliderPrimitive.Indicator className="rounded-full bg-primary select-none" />
				</SliderPrimitive.Track>
				{/* Thumbs sit outside the track so the track's overflow-hidden cannot clip them. */}
				{Array.from({ length: thumbCount }, (_, index) => (
					<SliderPrimitive.Thumb
						// biome-ignore lint/suspicious/noArrayIndexKey: thumbs are positional and have no stable id
						key={index}
						index={index}
						className="size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[box-shadow] select-none hover:ring-3 focus-visible:outline-hidden focus-visible:ring-3 active:ring-3 data-disabled:pointer-events-none"
					/>
				))}
			</SliderPrimitive.Control>
		</SliderPrimitive.Root>
	);
}

export { Slider };
