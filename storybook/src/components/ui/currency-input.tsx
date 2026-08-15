import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils';

const currencyInputVariants = cva(
	'relative flex w-full cursor-text items-center justify-between gap-x-1 overflow-hidden rounded-md bg-[var(--input-bg)] shadow-[var(--input-shadow)] transition-[color,background-color,border-color,box-shadow] hover:bg-[var(--input-bg-hover)] focus-within:shadow-[var(--input-shadow-focus)]',
	{
		variants: {
			size: {
				base: 'h-8 text-sm',
				small: 'h-7 text-xs',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
);

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
						'cursor-not-allowed bg-[var(--input-disabled-bg)] text-[var(--input-disabled-fg)]',
					(props['aria-invalid'] || !valid) &&
						'shadow-[var(--input-shadow-error)]',
					className,
				)}
			>
				<span
					role="presentation"
					className={cn(
						'w-fit min-w-8 select-none border-input border-r px-2 text-[var(--input-placeholder)] uppercase',
						disabled && 'text-[var(--input-disabled-fg)]',
						size === 'base' ? 'py-[9px]' : 'py-[5px]',
					)}
				>
					{code}
				</span>

				<input
					ref={innerRef}
					disabled={disabled}
					inputMode="decimal"
					className={cn(
						'h-full min-w-0 flex-1 appearance-none bg-transparent px-1 text-right text-[var(--input-fg)] outline-none placeholder:text-[var(--input-placeholder)]',
						disabled &&
							'cursor-not-allowed text-[var(--input-disabled-fg)] placeholder:text-[var(--input-disabled-fg)]',
					)}
					onInvalid={onInnerInvalid}
					{...props}
				/>

				<span
					role="presentation"
					className={cn(
						'flex w-fit min-w-8 select-none items-center justify-center border-input border-l px-2 text-right text-[var(--input-placeholder)]',
						disabled && 'text-[var(--input-disabled-fg)]',
						size === 'base' ? 'py-[9px]' : 'py-[5px]',
					)}
				>
					{symbol}
				</span>
			</div>
		);
	},
);

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput, currencyInputVariants };
