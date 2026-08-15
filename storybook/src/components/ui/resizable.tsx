import type * as React from 'react';
import {
	Group,
	type GroupProps,
	Panel,
	Separator,
	type SeparatorProps,
} from 'react-resizable-panels';
import { cn } from '../utils';

function ResizablePanelGroup({
	direction = 'horizontal',
	className,
	...props
}: Omit<GroupProps, 'orientation'> & {
	direction?: 'horizontal' | 'vertical';
}) {
	return (
		<Group
			className={cn(
				'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
				className,
			)}
			orientation={direction}
			{...props}
		/>
	);
}

function ResizablePanel(props: React.ComponentProps<typeof Panel>) {
	return <Panel {...props} />;
}

function ResizableHandle({
	withHandle,
	className,
	...props
}: SeparatorProps & {
	withHandle?: boolean;
}) {
	return (
		<Separator
			className={cn(
				'relative flex w-2 items-center justify-center bg-ui-bg-subtle after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-ui-border-base hover:after:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40',
				className,
			)}
			{...props}
		>
			{withHandle ? (
				<div className="z-10 flex h-8 w-4 items-center justify-center rounded-full border border-ui-border-base bg-ui-bg-base">
					<i className="ti ti-grip-vertical fill-current text-lg text-ui-fg-muted" />
				</div>
			) : null}
		</Separator>
	);
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
