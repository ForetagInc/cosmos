import { cva } from 'class-variance-authority';
import { Select as SelectPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../utils';

type SelectSize = 'base' | 'small';

const SelectSizeContext = React.createContext<SelectSize>('base');

const selectTriggerVariants = cva(
	'flex w-full items-center justify-between gap-2 rounded-md border-0 bg-[var(--select-bg)] text-[var(--select-fg)] shadow-[var(--select-shadow)] transition-[color,background-color,border-color,box-shadow] hover:bg-[var(--select-bg-hover)] focus:outline-none focus-visible:shadow-[var(--select-shadow-focus)] focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-[var(--select-disabled-bg)] disabled:text-[var(--select-disabled-fg)] data-[placeholder]:text-[var(--select-placeholder)] [&>span]:line-clamp-1',
	{
		variants: {
			size: {
				base: 'h-9 px-2.5 py-2 text-sm',
				small: 'h-8 px-2 py-1.5 text-xs',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
);

const selectItemVariants = cva(
	'relative flex w-full cursor-pointer select-none items-center rounded-md pr-2 pl-8 text-[var(--select-content-fg)] outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
	{
		variants: {
			size: {
				base: 'h-8 py-1.5 text-sm',
				small: 'h-7 py-1 text-xs',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
);

type SelectProps = React.ComponentPropsWithoutRef<
	typeof SelectPrimitive.Root
> & {
	size?: SelectSize;
};

const Select = ({ size = 'base', children, ...props }: SelectProps) => (
	<SelectSizeContext.Provider value={size}>
		<SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
	</SelectSizeContext.Provider>
);

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(
			selectTriggerVariants({
				size: React.useContext(SelectSizeContext),
			}),
			className,
		)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<span className="flex flex-col items-center justify-center text-(--select-placeholder)">
				<i className="ti ti-selector" />
			</span>
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={cn(
			'flex cursor-default items-center justify-center py-1',
			className,
		)}
		{...props}
	>
		<i className="ti ti-chevron-up text-lg" />
	</SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={cn(
			'flex cursor-default items-center justify-center py-1',
			className,
		)}
		{...props}
	>
		<i className="ti ti-chevron-down text-lg" />
	</SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
	SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
	(
		{
			className,
			children,
			position = 'popper',
			sideOffset = 8,
			collisionPadding = 24,
			...props
		},
		ref,
	) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				ref={ref}
				className={cn(
					'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border border-ui-border-base bg-[var(--select-content-bg)] text-[var(--select-content-fg)] shadow-[var(--select-content-shadow)] data-[state=closed]:animate-out data-[state=open]:animate-in',
					position === 'popper' &&
						'data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
					className,
				)}
				position={position}
				sideOffset={sideOffset}
				collisionPadding={collisionPadding}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={cn(
						'overflow-y-auto p-0.5',
						position === 'popper' &&
							'w-full min-w-(--radix-select-trigger-width)',
					)}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	),
);

SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn('py-1.5 pr-2 pl-8 font-semibold text-sm', className)}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(
			selectItemVariants({ size: React.useContext(SelectSizeContext) }),
			className,
		)}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<i className="ti ti-check text-lg" />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-separator', className)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
};
