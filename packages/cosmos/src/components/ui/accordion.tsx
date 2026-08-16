import { Accordion as AccordionPrimitive } from '@base-ui-components/react/accordion';
import type * as React from 'react';

import { cn } from '../utils';

const Accordion = AccordionPrimitive.Root;

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item className={cn('border-b', className)} {...props} />
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				className={cn(
					'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline data-panel-open:[&>i]:rotate-180',
					className,
				)}
				{...props}
			>
				{children}
				<i className="ti ti-chevron-down shrink-0 text-lg transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
	return (
		<AccordionPrimitive.Panel
			className="h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0"
			{...props}
		>
			<div className={cn('pt-0 pb-4', className)}>{children}</div>
		</AccordionPrimitive.Panel>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
