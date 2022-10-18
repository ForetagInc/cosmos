import React, { FC, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export interface IButtonProps extends VariantProps<typeof buttonClasses> {
	/**
	 * Label as a string
	 */
	label: string;
}

const buttonClasses = cva([
	'cursor:pointer outline:none ~all|100ms|ease p:6|12 f:semibold r:4'
], {
	variants: {
		disabled: { true: ['pointer:disabled'] },
		isLoading: { true: ['pointer:disabled'] },
		size: {
			micro: ['p:4'],
			small: ['p:6'],
			medium: ['p:8'],
			large: ['p:10'],
			macro: ['p:12'],
		},
		variant: {
			primary: [
				'b:0',
				'primary'
			],
			secondary: ['bg:white b:1|solid|gray-90 f:eerie-black {bg:gray-90}:hover {bg:gray-20 b:1|solid|gray-10}@dark {bg:gray-10}:hover@dark']
		}
	}
});

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
	disabled: false,
	label: 'Button',
};