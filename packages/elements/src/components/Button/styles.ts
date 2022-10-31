import { cva } from 'class-variance-authority';

export const buttonClasses = cva([
	'outline:none ~all|100ms|ease p:6|12 f:medium r:6',
], {
	variants: {
		disabled: {
			true: ['cursor:not-allowed b:1|solid|sonic-silver fg:sonic-silver'],
			false: ['cursor:pointer']
		},
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
				'bg:han-purple fg:ghost-white b:0',
				'bg:purple-40:hover'
			],
			secondary: [
				'bg:none',
			],
			tertiary: [
				'bg:none b:none fg:han-purple t:underline',
				'{f:bold}:hover'
			]
		}
	},
	compoundVariants: [
		{
			disabled: false,
			variant: 'secondary',
			class: [
				'b:1|solid|han-purple fg:han-purple',
				'{bg:gray-20}:hover@dark'
			]
		}
	]
});