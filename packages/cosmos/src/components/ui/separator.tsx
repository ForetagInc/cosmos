import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator';
import type * as React from 'react';
import { cn } from '../utils';

function Separator({
	className,
	orientation = 'horizontal',
	...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
	return (
		<SeparatorPrimitive
			orientation={orientation}
			className={cn(
				'shrink-0 bg-separator',
				orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
				className,
			)}
			{...props}
		/>
	);
}

export { Separator };
