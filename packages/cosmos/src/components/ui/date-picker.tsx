import { format, isBefore, isValid, parse, startOfDay } from 'date-fns';
import * as React from 'react';
import { Calendar } from './calendar';
import { Input } from './input';
import {
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverTrigger,
} from './popover';
import { cn } from '../utils';

type Props = {
	date?: Date;
	onSelect: (date: Date | undefined) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	min?: Date;
};

export function DatePicker({
	date,
	onSelect,
	placeholder = 'DD/MM/YYYY',
	className,
	disabled = false,
	min,
}: Props) {
	const [open, setOpen] = React.useState(false);
	const dayRef = React.useRef<HTMLInputElement>(null);
	const monthRef = React.useRef<HTMLInputElement>(null);
	const yearRef = React.useRef<HTMLInputElement>(null);
	const [dayPart, setDayPart] = React.useState('');
	const [monthPart, setMonthPart] = React.useState('');
	const [yearPart, setYearPart] = React.useState('');
	const [hasError, setHasError] = React.useState(false);

	const normalizedMin = React.useMemo(
		() => (min ? startOfDay(min) : undefined),
		[min],
	);

	React.useEffect(() => {
		if (!date) {
			setDayPart('');
			setMonthPart('');
			setYearPart('');
			setHasError(false);
			return;
		}
		setDayPart(format(date, 'dd'));
		setMonthPart(format(date, 'MM'));
		setYearPart(format(date, 'yyyy'));
		setHasError(
			Boolean(normalizedMin && isBefore(startOfDay(date), normalizedMin)),
		);
	}, [date, normalizedMin]);

	const commitValue = React.useCallback(() => {
		const day = dayPart.trim();
		const monthValue = monthPart.trim();
		const year = yearPart.trim();

		if (!day && !monthValue && !year) {
			onSelect(undefined);
			setHasError(false);
			return;
		}

		if (!day || !monthValue || year.length < 4) {
			return;
		}

		const strictText = `${day.padStart(2, '0')}/${monthValue.padStart(2, '0')}/${year}`;
		const dateFromStrict = parse(strictText, 'dd/MM/yyyy', new Date());
		if (
			isValid(dateFromStrict) &&
			format(dateFromStrict, 'dd/MM/yyyy') === strictText
		) {
			if (
				normalizedMin &&
				isBefore(startOfDay(dateFromStrict), normalizedMin)
			) {
				setHasError(true);
				return;
			}
			onSelect(dateFromStrict);
			setDayPart(format(dateFromStrict, 'dd'));
			setMonthPart(format(dateFromStrict, 'MM'));
			setYearPart(format(dateFromStrict, 'yyyy'));
			setHasError(false);
			return;
		}

		const looseText = `${Number.parseInt(day, 10)}/${Number.parseInt(monthValue, 10)}/${year}`;
		const dateFromLoose = parse(looseText, 'd/M/yyyy', new Date());
		if (
			isValid(dateFromLoose) &&
			format(dateFromLoose, 'd/M/yyyy') === looseText
		) {
			if (normalizedMin && isBefore(startOfDay(dateFromLoose), normalizedMin)) {
				setHasError(true);
				return;
			}
			onSelect(dateFromLoose);
			setDayPart(format(dateFromLoose, 'dd'));
			setMonthPart(format(dateFromLoose, 'MM'));
			setYearPart(format(dateFromLoose, 'yyyy'));
			setHasError(false);
		}
	}, [dayPart, monthPart, normalizedMin, onSelect, yearPart]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverAnchor asChild>
				<div
					className={cn(
						'relative flex h-9 w-full items-center gap-1.5 rounded-md bg-[var(--input-bg)] px-2.5 text-[var(--input-fg)] shadow-[var(--input-shadow)] transition-[color,background-color,border-color,box-shadow] focus-within:shadow-[var(--input-shadow-focus)] hover:bg-[var(--input-bg-hover)]',
						hasError && 'shadow-[var(--input-shadow-error)]',
						disabled &&
							'cursor-not-allowed bg-[var(--input-disabled-bg)] text-[var(--input-disabled-fg)]',
						className,
					)}
					title={placeholder}
				>
					<div className="flex min-w-0 flex-1 items-center gap-1 text-sm">
						<Input
							ref={dayRef}
							value={dayPart}
							disabled={disabled}
							inputMode="numeric"
							placeholder="DD"
							maxLength={2}
							className="h-auto w-7 rounded-none bg-transparent p-0 text-center text-sm shadow-none focus-visible:shadow-none"
							onChange={(event) => {
								const next = event.target.value.replace(/\D/g, '').slice(0, 2);
								setDayPart(next);
								if (next.length === 2) {
									monthRef.current?.focus();
									monthRef.current?.select();
								}
							}}
							onBlur={commitValue}
							onKeyDown={(event) => {
								if (event.key === 'ArrowRight') {
									monthRef.current?.focus();
									monthRef.current?.select();
								}
								if (event.key === 'Enter') {
									commitValue();
									setOpen(false);
								}
							}}
						/>
						<span className="text-[var(--input-placeholder)]">/</span>
						<Input
							ref={monthRef}
							value={monthPart}
							disabled={disabled}
							inputMode="numeric"
							placeholder="MM"
							maxLength={2}
							className="h-auto w-7 rounded-none bg-transparent p-0 text-center text-sm shadow-none focus-visible:shadow-none"
							onChange={(event) => {
								const next = event.target.value.replace(/\D/g, '').slice(0, 2);
								setMonthPart(next);
								if (next.length === 2) {
									yearRef.current?.focus();
									yearRef.current?.select();
								}
							}}
							onBlur={commitValue}
							onKeyDown={(event) => {
								if (event.key === 'ArrowLeft') {
									dayRef.current?.focus();
									dayRef.current?.select();
								}
								if (event.key === 'ArrowRight') {
									yearRef.current?.focus();
									yearRef.current?.select();
								}
								if (event.key === 'Backspace' && !monthPart) {
									dayRef.current?.focus();
									dayRef.current?.select();
								}
								if (event.key === 'Enter') {
									commitValue();
									setOpen(false);
								}
							}}
						/>
						<span className="text-[var(--input-placeholder)]">/</span>
						<Input
							ref={yearRef}
							value={yearPart}
							disabled={disabled}
							inputMode="numeric"
							placeholder="YYYY"
							maxLength={4}
							className="h-auto w-11 rounded-none bg-transparent p-0 text-center text-sm shadow-none focus-visible:shadow-none"
							onChange={(event) => {
								const next = event.target.value.replace(/\D/g, '').slice(0, 4);
								setYearPart(next);
							}}
							onBlur={commitValue}
							onKeyDown={(event) => {
								if (event.key === 'ArrowLeft') {
									monthRef.current?.focus();
									monthRef.current?.select();
								}
								if (event.key === 'Enter') {
									commitValue();
									setOpen(false);
								}
							}}
						/>
					</div>
					<PopoverTrigger asChild>
						<button
							type="button"
							disabled={disabled}
							aria-label="Open calendar"
							className="absolute top-1/2 right-2 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
						>
							<i
								aria-hidden="true"
								className="ti ti-calendar-event text-base"
							/>
						</button>
					</PopoverTrigger>
				</div>
			</PopoverAnchor>
			<PopoverContent
				className="w-auto overflow-visible border-0 bg-transparent p-2 shadow-none"
				align="center"
			>
				<Calendar
					mode="single"
					selected={date}
					disabled={normalizedMin ? { before: normalizedMin } : undefined}
					onSelect={(nextDate) => {
						if (
							nextDate &&
							normalizedMin &&
							isBefore(startOfDay(nextDate), normalizedMin)
						) {
							setHasError(true);
							return;
						}
						onSelect(nextDate);
						setDayPart(nextDate ? format(nextDate, 'dd') : '');
						setMonthPart(nextDate ? format(nextDate, 'MM') : '');
						setYearPart(nextDate ? format(nextDate, 'yyyy') : '');
						setHasError(false);
						setOpen(false);
					}}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
