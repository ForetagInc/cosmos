import { Progress as ProgressPrimitive } from '@base-ui-components/react/progress';
import type * as React from 'react';
import { cn } from '../utils';

function Progress({
	className,
	...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
	return (
		<ProgressPrimitive.Root className={cn('w-full', className)} {...props}>
			<ProgressPrimitive.Track className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
				<ProgressPrimitive.Indicator className="h-full bg-primary transition-all" />
			</ProgressPrimitive.Track>
		</ProgressPrimitive.Root>
	);
}

export { Progress };
