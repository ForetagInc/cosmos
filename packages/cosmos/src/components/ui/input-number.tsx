import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '../utils';
import { Button } from './button';
import { Input } from './input';

type InputNumberProps = Omit<
	ComponentPropsWithoutRef<typeof Input>,
	'value' | 'defaultValue' | 'onChange' | 'type'
> & {
	value: number;
	onValueChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	wrapperClassName?: string;
};

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
	(
		{
			className,
			id,
			value,
			onValueChange,
			min = 1,
			max,
			step = 1,
			wrapperClassName = 'mt-2',
			...props
		},
		ref,
	) => {
		const clamp = (n: number) => {
			if (Number.isNaN(n)) return min;
			let v = Math.max(min, n);
			if (typeof max === 'number') v = Math.min(max, v);
			return v;
		};

		const dec = () => onValueChange(clamp(value - step));
		const inc = () => onValueChange(clamp(value + step));

		return (
			<div>
				<div className={cn('flex gap-2', wrapperClassName)}>
					<Button
						type="button"
						variant="outline"
						onClick={dec}
						disabled={value <= min}
						aria-label="Decrease"
					>
						<i className="ti ti-minus text-lg" />
					</Button>
					<Input
						id={id}
						ref={ref}
						type="number"
						inputMode="numeric"
						min={min}
						max={max}
						step={step}
						value={Number.isFinite(value) ? value : min}
						onChange={(e) => onValueChange(clamp(e.target.valueAsNumber))}
						className={cn('bg-background text-center', className)}
						{...props}
					/>
					<Button
						type="button"
						variant="outline"
						onClick={inc}
						disabled={typeof max === 'number' ? value >= max : false}
						aria-label="Increase"
					>
						<i className="ti ti-plus text-lg" />
					</Button>
				</div>
			</div>
		);
	},
);

InputNumber.displayName = 'InputNumber';
