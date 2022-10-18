import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const size = {
	micro: '',
	small: '',
	medium: 'h:28 lh:1.75rem',
	large: '',
	macro: ''
};

const circled = {
	true: 'rounded',
	false: 'radius-md'
};

const avatarClasses = cva(
	[
		'bg:ghost-white square f:10',
		'text:center',
		'{bg:eerie-black;f:ghost-white}@dark'
	],
	{
		variants: {
			size,
			circled
		}
	}
);

const avatarImageClasses = cva(
	[],
	{
		variants: {
			size,
			circled
		}
	}
);

export interface IAvatarProps extends VariantProps<typeof avatarClasses> {
	username: string;
	src?: string;
};

export const Avatar: FC<IAvatarProps> = ({ src, username, ...props }) => {
	return <div className={avatarClasses(props)}>
		{src && <img className={avatarImageClasses(props)} src={src} alt={username} />}
		{username && !src && <p>{username}</p>}
	</div>
};

Avatar.defaultProps = {
	size: 'medium',
	circled: false,
};