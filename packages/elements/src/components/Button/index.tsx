import React, { forwardRef } from 'react';

import {
	type AriaButtonProps,
	useButton
} from 'react-aria';

import { type VariantProps } from 'class-variance-authority';

import { buttonClasses } from './styles';

import { useDOMRef } from '../../utils/dom';

export interface IButtonProps extends
	AriaButtonProps,
	VariantProps<typeof buttonClasses> {
	/**
	 * Label as a string
	 */
	label: string;

	/**
	 * 
	 */
	disabled: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ label, ...props }, ref) => {

		const buttonRef = useDOMRef(ref);
		const { buttonProps } = useButton({
			...props,
		}, buttonRef);

		return <button
			ref={ref}
			className={buttonClasses(props)}
			role='button'
			data-testid='button'
			{...buttonProps}
		>
			{label}
		</button>;
	}
);

Button.defaultProps = {
	size: 'medium',
	variant: 'secondary',
	isLoading: false,
	disabled: false,
	label: 'Button',
};

Button.displayName = 'Button';