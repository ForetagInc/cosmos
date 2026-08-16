import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../utils';

const currencyInputVariants = tv({
	base: 'relative flex w-full cursor-text items-center justify-between overflow-hidden rounded-md bg-(--input-bg) shadow-(--input-shadow) transition-[color,background-color,border-color,box-shadow] hover:bg-[var(--input-bg-hover)] focus-within:shadow-[var(--input-shadow-focus)]',
	variants: {
		size: {
			base: 'h-8 text-sm',
			small: 'h-7 text-xs',
		},
	},
	defaultVariants: {
		size: 'base',
	},
});

export interface CurrencyInputProps
	extends Omit<React.ComponentProps<'input'>, 'size'>,
		VariantProps<typeof currencyInputVariants> {
	code?: string;
	symbol?: string;
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
	(
		{
			className,
			size = 'base',
			code = 'USD',
			symbol = '$',
			disabled,
			onInvalid,
			...props
		},
		ref,
	) => {
		const innerRef = React.useRef<HTMLInputElement>(null);
		React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);
		const [valid, setValid] = React.useState(true);

		const onInnerInvalid = React.useCallback(
			(event: React.FormEvent<HTMLInputElement>) => {
				setValid(event.currentTarget.validity.valid);
				onInvalid?.(event);
			},
			[onInvalid],
		);

		return (
			<div
				className={cn(
					currencyInputVariants({ size }),
					disabled &&
						'cursor-not-allowed bg-(--input-disabled-bg) text-(--input-disabled-fg)',
					(props['aria-invalid'] || !valid) && 'shadow-(--input-shadow-error)',
					className,
				)}
			>
				<span
					role="presentation"
					className={cn(
						'flex w-fit min-w-8 select-none items-center justify-center border-input border-r px-2 text-right text-(--input-placeholder)',
						disabled && 'text-(--input-disabled-fg)',
						size === 'base' ? 'py-2.25' : 'py-1.25',
					)}
				>
					{symbol}
				</span>

				<input
					ref={innerRef}
					disabled={disabled}
					inputMode="decimal"
					className={cn(
						'h-full min-w-0 flex-1 appearance-none border-none text-right text-(--input-fg) outline-none placeholder:text-(--input-placeholder)',
						disabled &&
							'cursor-not-allowed text-(--input-disabled-fg) placeholder:text-(--input-disabled-fg)',
					)}
					onInvalid={onInnerInvalid}
					{...props}
				/>

				<span
					role="presentation"
					className={cn(
						'w-fit min-w-8 select-none border-input border-l px-2 text-(--input-placeholder) uppercase',
						disabled && 'text-(--input-disabled-fg)',
						size === 'base' ? 'py-2.25' : 'py-1.25',
					)}
				>
					{code}
				</span>
			</div>
		);
	},
);

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput, currencyInputVariants };
