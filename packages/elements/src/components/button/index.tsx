import React, { forwardRef } from 'react';

import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import type { PressEvent } from '@react-types/shared';
import type { AriaButtonProps } from '@react-types/button';

import { type VariantProps } from 'class-variance-authority';

import { useDOMRef } from '../../utils/dom';

import { buttonClasses } from './styles';

export interface IButtonProps extends
	AriaButtonProps,
	VariantProps<typeof buttonClasses> {
	/**
	 * Label as a string
	 */
	label: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ label, ...props }, ref) => {

		const {
			onPress,
			...btnProps
		} = props;

		const handlePress = (e: PressEvent) => onPress?.(e);

		const buttonRef = useDOMRef(ref);
		const { buttonProps } = useButton({
			...props,
			onPress: handlePress,
		}, buttonRef);

		return <button
			ref={ref}
			className={buttonClasses(props)}
			role='button'
			data-testid='button'
			{...buttonProps}
		>
			{label}
		</button >;
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