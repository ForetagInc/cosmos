import { Avatar, AvatarFallback } from './avatar';
import { cn } from '../utils';
import * as React from 'react';

type AvatarProps = React.ComponentProps<typeof Avatar>;

interface AvatarGroupProps extends React.ComponentProps<'div'> {
	children: React.ReactElement<AvatarProps> | React.ReactElement<AvatarProps>[];
	avatarClassName?: string; // extra classes for each avatar (ex: shadow, border color, etc.)
	sizeClassName?: string; // ex: "size-8" or "h-8 w-8"
	max?: number;
}

export const AvatarGroup = ({
	children,
	max,
	className,
	avatarClassName,
	sizeClassName = 'size-8',
	...props
}: AvatarGroupProps) => {
	const all = React.Children.toArray(children).filter(
		React.isValidElement,
	) as React.ReactElement<AvatarProps>[];
	const total = all.length;

	const limit = typeof max === 'number' && max > 0 ? max : total;
	const displayed = all.slice(0, limit).reverse();

	const remaining = total > limit ? total - limit : 0;

	return (
		<div
			className={cn('flex flex-row-reverse items-center', className)}
			{...props}
		>
			{remaining > 0 && (
				<Avatar
					className={cn(
						'relative -ml-2 ring-2 ring-ui-bg-base hover:z-10',
						sizeClassName,
						avatarClassName,
					)}
				>
					<AvatarFallback
						className={cn('bg-muted-foreground text-white', sizeClassName)}
					>
						+{remaining}
					</AvatarFallback>
				</Avatar>
			)}

			{displayed.map((avatar, index) => {
				return (
					<div
						key={avatar.key ?? index}
						className={cn('relative -ml-2 hover:z-10', sizeClassName)}
					>
						{React.cloneElement(avatar, {
							className: cn(
								'ring-2 ring-ui-bg-base',
								sizeClassName,
								avatar.props.className, // keep existing sizing/classes from caller
								avatarClassName,
							),
						})}
					</div>
				);
			})}
		</div>
	);
};
