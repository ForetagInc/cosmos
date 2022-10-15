import React, { FC, useRef } from 'react';
import { ITracking, TSize } from '../../types';

import { cva } from 'class-variance-authority';

const buttonClasses = cva([
	'cursor:pointer outline:none ~all|100ms|ease p:6|12 f:semibold r:4'
], {
	variants: {
		variant: {
			primary: [
				'b:0',
				'primary'
			],
			secondary: ['bg:white b:1|solid|gray-90 f:eerie-black {bg:gray-90}:hover {bg:gray-20 b:1|solid|gray-10}@dark {bg:gray-10}:hover@dark']
		}
	}
});

export interface IButtonProps {
	/**
	 * Size of the button
	 */
	size?: TSize;

	/**
	 * Variant of the button
	 */
	variant?: 'primary' | 'secondary';

	/**
	 * Visually disables the button and shows a loading spinner and also disables the button.
	 */
	isLoading?: boolean;

	/**
	 * Visually and functionally disable the Button.
	 */
	disabled?: boolean;

	/**
	 * Label as a string
	 */
	label: string;

	/**
	 * Tracking data related to the `button`'s events
	 */
	tracking?: ITracking;
}

export const Button: FC<IButtonProps> = ({ label, ...props }) => {
	const { disabled, isLoading } = props;
	const button = useRef<HTMLButtonElement>(null);

	return <button
		ref={button}
		className={buttonClasses(props)}
		disabled={disabled || isLoading}
	>
		{label}
	</button >;
};

Button.defaultProps = {
	size: 'medium',
	variant: 'secondary',
	isLoading: false,
	label: 'Button',
	disabled: false,
};