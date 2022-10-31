import React, { FC } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { avatarClasses, avatarImageClasses } from './styles';

export interface IAvatarProps extends
	VariantProps<typeof avatarClasses> {
	username: string;
	src?: string;
};

export const Avatar: FC<IAvatarProps> = ({
	src,
	username,
	...props
}) => {
	return <div className={avatarClasses(props)}>
		{src &&
			<img
				className={avatarImageClasses(props)}
				src={src}
				alt={username} />
		}
		{username && !src && <p>{username}</p>}
	</div>
};

Avatar.defaultProps = {
	size: 'medium',
	circled: false,
};