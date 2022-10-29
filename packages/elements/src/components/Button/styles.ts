import { cva } from 'class-variance-authority';

export const buttonClasses = cva([
	'outline:none ~all|100ms|ease p:6|12 f:semibold r:4'
], {
	variants: {
		isDisabled: { true: ['cursor:not-allowed'], false: ['cursor:pointer'] },
		isLoading: { true: ['cursor:not-allowed'] },
		size: {
			micro: ['p:4'],
			small: ['p:6'],
			medium: ['p:8'],
			large: ['p:10'],
			macro: ['p:12'],
		},
		variant: {
			primary: [
				'bg:primary f:ghost-white b:0',
				'bg:purple-40:hover'
			],
			secondary: [
				'bg:none b:1|solid|han-purple f:han-purple',
			],
			tertiary: [
				'bg:none b:none f:han-purple t:underline'
			]
		}
	},
	compoundVariants: [
		{
			isDisabled: false,
			variant: 'secondary',
			class: [
				'{bg:gray-20}:hover@dark'
			]
		}
	]
});