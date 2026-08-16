import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cn } from '../utils';

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
	variant?: 'default' | 'embedded';
};

function Calendar({
	className,
	classNames,
	variant = 'default',
	showOutsideDays = true,
	...props
}: CalendarProps) {
	const defaultClassNames = getDefaultClassNames();
	const isEmbedded = variant === 'embedded';

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn(isEmbedded ? 'p-0' : 'p-3', className)}
			classNames={{
				root: cn(
					defaultClassNames.root,
					isEmbedded
						? 'w-full overflow-visible rounded-none border-0 bg-transparent'
						: 'w-fit overflow-visible rounded-md border border-border bg-background',
				),
				months: cn(
					defaultClassNames.months,
					isEmbedded
						? 'relative flex flex-col gap-2'
						: 'relative flex flex-col gap-4 sm:flex-row',
				),
				month: cn(
					defaultClassNames.month,
					isEmbedded ? 'w-full space-y-2' : 'w-full space-y-4',
				),
				month_caption: cn(
					defaultClassNames.month_caption,
					isEmbedded
						? 'relative flex h-8 w-full items-center justify-center px-6'
						: 'relative flex h-10 w-full items-center justify-center px-10',
				),
				caption_label: cn(
					defaultClassNames.caption_label,
					isEmbedded ? 'font-medium text-xs' : 'font-medium text-sm',
				),
				nav: cn(
					defaultClassNames.nav,
					isEmbedded
						? 'pointer-events-none absolute inset-x-0 top-1 z-10 flex items-center justify-between px-1'
						: 'pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between',
				),
				button_previous: cn(
					defaultClassNames.button_previous,
					isEmbedded
						? 'pointer-events-auto inline-flex size-6 items-center justify-center rounded-md border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:bg-accent/70 hover:text-accent-foreground'
						: 'pointer-events-auto inline-flex size-7 -translate-x-[1.55rem] items-center justify-center rounded-md border border-input bg-background p-0 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
				),
				button_next: cn(
					defaultClassNames.button_next,
					isEmbedded
						? 'pointer-events-auto inline-flex size-6 items-center justify-center rounded-md border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:bg-accent/70 hover:text-accent-foreground'
						: 'pointer-events-auto inline-flex size-7 translate-x-[1.55rem] items-center justify-center rounded-md border border-input bg-background p-0 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
				),
				month_grid: cn(
					defaultClassNames.month_grid,
					isEmbedded
						? 'mt-1.5 w-full border-collapse'
						: 'mt-3 w-full border-collapse',
				),
				weekdays: cn(defaultClassNames.weekdays, 'grid grid-cols-7'),
				weekday: cn(
					defaultClassNames.weekday,
					isEmbedded
						? 'flex h-6 w-full items-center justify-center font-normal text-[10px] text-muted-foreground'
						: 'flex size-9 items-center justify-center font-normal text-muted-foreground text-xs',
				),
				weeks: cn(
					defaultClassNames.weeks,
					isEmbedded ? 'grid gap-0.5' : 'grid gap-1',
				),
				week: cn(
					defaultClassNames.week,
					isEmbedded ? 'grid grid-cols-7 gap-0.5' : 'grid grid-cols-7 gap-1',
				),
				day: cn(
					defaultClassNames.day,
					isEmbedded
						? 'h-6 w-full p-0 text-center text-xs'
						: 'size-9 p-0 text-center text-sm',
				),
				day_button: cn(
					defaultClassNames.day_button,
					isEmbedded
						? 'inline-flex h-6 w-full items-center justify-center rounded-md px-0 font-normal'
						: 'inline-flex size-9 items-center justify-center rounded-md font-normal',
					'hover:bg-accent hover:text-accent-foreground',
					'[&[data-today]]:rounded-md [&[data-today]]:bg-accent [&[data-today]]:text-accent-foreground',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				),
				selected: cn(
					defaultClassNames.selected,
					'rounded-md [&_button]:!bg-primary [&_button]:!text-primary-foreground [&_button]:hover:!bg-primary [&_button]:hover:!text-primary-foreground',
				),
				today: cn(defaultClassNames.today, 'rounded-md'),
				outside: cn(
					defaultClassNames.outside,
					'text-muted-foreground aria-selected:bg-accent/40 aria-selected:text-muted-foreground',
				),
				disabled: cn(defaultClassNames.disabled, 'opacity-50'),
				range_start: cn(defaultClassNames.range_start, 'rounded-l-md'),
				range_middle: cn(defaultClassNames.range_middle, 'rounded-none'),
				range_end: cn(defaultClassNames.range_end, 'rounded-r-md'),
				hidden: cn(defaultClassNames.hidden, 'invisible'),
				...classNames,
			}}
			components={{
				Chevron: ({
					orientation,
					className: chevronClassName,
					...chevronProps
				}) =>
					orientation === 'left' ? (
						<i
							className={cn('ti ti-chevron-left text-lg', chevronClassName)}
							{...chevronProps}
						/>
					) : (
						<i
							className={cn('ti ti-chevron-right text-lg', chevronClassName)}
							{...chevronProps}
						/>
					),
			}}
			{...props}
		/>
	);
}

export { Calendar };
