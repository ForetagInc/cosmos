import { Menu as MenuPrimitive } from '@base-ui-components/react/menu';
import type * as React from 'react';
import { cn } from '../utils';

const DropdownMenu = MenuPrimitive.Root;
const DropdownMenuTrigger = MenuPrimitive.Trigger;
const DropdownMenuGroup = MenuPrimitive.Group;
const DropdownMenuPortal = MenuPrimitive.Portal;
const DropdownMenuSub = MenuPrimitive.SubmenuRoot;
const DropdownMenuRadioGroup = MenuPrimitive.RadioGroup;

const itemClass =
	'relative flex h-8 cursor-pointer select-none items-center gap-2 rounded-md px-2 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:text-ui-fg-subtle data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-ui-fg-subtle data-highlighted:[&_svg]:text-accent-foreground';

const popupClass =
	'min-w-32 origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-md border border-ui-border-base bg-ui-bg-component p-0.5 text-ui-fg-base shadow-elevation-flyout transition-[opacity,transform] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0';

function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger> & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.SubmenuTrigger
			className={cn(
				itemClass,
				'data-popup-open:bg-accent',
				inset && 'pl-8',
				className,
			)}
			{...props}
		>
			{children}
			<i className="ti ti-chevron-right ml-auto text-lg text-ui-fg-subtle" />
		</MenuPrimitive.SubmenuTrigger>
	);
}

function DropdownMenuSubContent({
	className,
	...props
}: React.ComponentProps<typeof MenuPrimitive.Popup>) {
	return (
		<MenuPrimitive.Portal>
			<MenuPrimitive.Positioner className="z-50" sideOffset={4}>
				<MenuPrimitive.Popup className={cn(popupClass, className)} {...props} />
			</MenuPrimitive.Positioner>
		</MenuPrimitive.Portal>
	);
}

type DropdownMenuContentProps = React.ComponentProps<
	typeof MenuPrimitive.Popup
> &
	Pick<
		React.ComponentProps<typeof MenuPrimitive.Positioner>,
		'side' | 'align' | 'sideOffset'
	>;

function DropdownMenuContent({
	className,
	side,
	align,
	sideOffset = 4,
	...props
}: DropdownMenuContentProps) {
	return (
		<MenuPrimitive.Portal>
			<MenuPrimitive.Positioner
				className="z-50"
				side={side}
				align={align}
				sideOffset={sideOffset}
			>
				<MenuPrimitive.Popup
					className={cn(popupClass, 'max-h-(--available-height)', className)}
					{...props}
				/>
			</MenuPrimitive.Positioner>
		</MenuPrimitive.Portal>
	);
}

function DropdownMenuItem({
	className,
	inset,
	...props
}: React.ComponentProps<typeof MenuPrimitive.Item> & { inset?: boolean }) {
	return (
		<MenuPrimitive.Item
			className={cn(itemClass, inset && 'pl-8', className)}
			{...props}
		/>
	);
}

function DropdownMenuCheckboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem>) {
	return (
		<MenuPrimitive.CheckboxItem
			className={cn(itemClass, 'pr-2 pl-8', className)}
			{...props}
		>
			<span className="absolute left-2 flex size-3.5 items-center justify-center">
				<MenuPrimitive.CheckboxItemIndicator>
					<i className="ti ti-check" />
				</MenuPrimitive.CheckboxItemIndicator>
			</span>
			{children}
		</MenuPrimitive.CheckboxItem>
	);
}

function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
	return (
		<MenuPrimitive.RadioItem
			className={cn(itemClass, 'pr-2 pl-8', className)}
			{...props}
		>
			<span className="absolute left-2 flex size-3.5 items-center justify-center">
				<MenuPrimitive.RadioItemIndicator>
					<i className="ti ti-check" />
				</MenuPrimitive.RadioItemIndicator>
			</span>
			{children}
		</MenuPrimitive.RadioItem>
	);
}

function DropdownMenuLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel> & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.GroupLabel
			className={cn(
				'px-2 py-1.5 font-medium text-[11px] text-ui-fg-subtle uppercase tracking-wide',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	);
}

// Base UI's menu has no separator part, so this is a plain presentational rule.
function DropdownMenuSeparator({
	className,
	...props
}: React.ComponentProps<'hr'>) {
	return (
		<hr
			className={cn('-mx-1 my-1 h-px border-0 bg-separator', className)}
			{...props}
		/>
	);
}

function DropdownMenuShortcut({
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'ml-auto text-[10px] text-ui-fg-subtle uppercase tracking-wide',
				className,
			)}
			{...props}
		/>
	);
}

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
};
