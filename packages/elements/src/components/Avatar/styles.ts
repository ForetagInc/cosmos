import { cva } from 'class-variance-authority';

const size = {
	micro: 'h:20',
	small: 'h:24',
	medium: 'h:32 lh:2rem',
	large: 'h:48',
	macro: 'h:56'
};

const circled = {
	true: 'rounded',
	false: 'r:8'
};

export const avatarClasses = cva(
	[
		'bg:ghost-white square f:10',
		'text:center',
		'{bg:eerie-black;fg:ghost-white}@dark',
	],
	{
		variants: {
			size,
			circled
		}
	}
);

export const avatarImageClasses = cva(
	[],
	{
		variants: {
			size,
			circled
		}
	}
);