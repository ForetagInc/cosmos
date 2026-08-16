import { tv, type VariantProps } from 'tailwind-variants';
import { Dialog as SheetPrimitive } from '@base-ui-components/react/dialog';
import * as React from 'react';
import { cn } from '../utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Backdrop>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Backdrop
		className={cn(
			'fixed inset-0 z-50 bg-black/80 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0',
			className,
		)}
		{...props}
		ref={ref}
	/>
));

const sheetVariants = tv({
	base: 'fixed z-50 gap-4 rounded-lg border-border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out',
	variants: {
		side: {
			top: 'inset-x-0 top-0 border-b data-ending-style:-translate-y-full data-starting-style:-translate-y-full',
			bottom:
				'inset-x-0 bottom-0 border-t data-ending-style:translate-y-full data-starting-style:translate-y-full',
			left: 'inset-y-0 left-0 h-full border-r data-ending-style:-translate-x-full data-starting-style:-translate-x-full',
			right:
				'right-0 top-0 m-2 border h-[calc(100vh-1rem)] data-ending-style:translate-x-full data-starting-style:translate-x-full',
		},
		size: {
			sm: '',
			md: '',
			lg: '',
			xl: '',
			'2xl': '',
		},
	},
	defaultVariants: {
		side: 'right',
		size: 'sm',
	},
	compoundVariants: [
		{
			side: 'right',
			size: 'sm',
			class: 'w-[calc(100vw-1rem)] sm:w-full sm:max-w-sm',
		},
		{
			side: 'right',
			size: 'md',
			class: 'w-[calc(100vw-1rem)] sm:w-full sm:max-w-md',
		},
		{
			side: 'right',
			size: 'lg',
			class: 'w-[calc(100vw-1rem)] sm:w-full sm:max-w-lg',
		},
		{
			side: 'right',
			size: 'xl',
			class: 'w-[calc(100vw-1rem)] sm:w-full sm:max-w-xl',
		},
		{
			side: 'right',
			size: '2xl',
			class: 'w-[calc(100vw-1rem)] sm:w-full sm:max-w-2xl',
		},

		{ side: 'left', size: 'sm', class: 'w-3/4 sm:max-w-sm' },
		{ side: 'left', size: 'md', class: 'w-3/4 sm:max-w-md' },
		{ side: 'left', size: 'lg', class: 'w-3/4 sm:max-w-lg' },
		{ side: 'left', size: 'xl', class: 'w-3/4 sm:max-w-xl' },
		{ side: 'left', size: '2xl', class: 'w-3/4 sm:max-w-2xl' },
	],
});

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Popup>,
		VariantProps<typeof sheetVariants> {
	overlay?: boolean;
	inset?: boolean;
}

const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Popup>,
	SheetContentProps
>(
	(
		{
			overlay = true,
			side = 'right',
			size,
			inset = false,
			className,
			children,
			...props
		},
		ref,
	) => (
		<SheetPortal>
			{overlay && <SheetOverlay />}
			<SheetPrimitive.Popup
				ref={ref}
				className={cn(
					sheetVariants({ side, size }),
					inset &&
						(side === 'left' || side === 'right') &&
						'm-2 h-[calc(100dvh-1rem)]',
					'flex flex-col',
					className,
				)}
				{...props}
			>
				<div className="flex min-h-0 flex-1 flex-col">{children}</div>

				<SheetPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
					<i className="ti ti-x text-lg" />
					<span className="sr-only">Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Popup>
		</SheetPortal>
	),
);

const SheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-2 text-center sm:text-left',
			className,
		)}
		{...props}
	/>
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'mt-auto flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className,
		)}
		{...props}
	/>
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn('font-semibold text-foreground text-lg', className)}
		{...props}
	/>
));

const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn('text-muted-foreground text-sm', className)}
		{...props}
	/>
));

SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
	sheetVariants,
};
