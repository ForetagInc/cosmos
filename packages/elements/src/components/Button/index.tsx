import React, { forwardRef } from 'react';
import { Button as AriaButton } from 'ariakit';

import { type VariantProps } from 'class-variance-authority';

import { useDOMRef } from '../../utils/dom';

import { buttonClasses } from './styles';

export interface IButtonProps extends VariantProps<typeof buttonClasses> {
	/**
	 * Label as a string
	 */
	label: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ label, ...props }, ref) => {
		return <AriaButton
			ref={ref}
			className={buttonClasses(props)}
			role='button'
			data-testid='button'
			{...props}
		>
			{label}
		</AriaButton>;
	}
);

Button.displayName = 'Button';

Button.defaultProps = {
	size: 'medium',
	variant: 'secondary',
	isLoading: false,
	isDisabled: false,
	label: 'Button',
};