import { Tabs as TabsPrimitive } from '@base-ui-components/react/tabs';
import type * as React from 'react';
import { cn } from '../utils';

const Tabs = TabsPrimitive.Root;

function TabsList({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			className={cn(
				'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
				className,
			)}
			{...props}
		/>
	);
}

function TabsTrigger({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
	return (
		<TabsPrimitive.Tab
			className={cn(
				'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm transition-[color,background-color,border-color,box-shadow] focus-visible:shadow-[var(--input-shadow-focus)] focus-visible:outline-none focus-visible:ring-0 data-active:bg-background data-active:text-foreground data-active:shadow-sm data-disabled:pointer-events-none data-disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	);
}

function TabsContent({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
	return (
		<TabsPrimitive.Panel
			className={cn(
				'mt-2 focus-visible:shadow-[var(--input-shadow-focus)] focus-visible:outline-none focus-visible:ring-0',
				className,
			)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
