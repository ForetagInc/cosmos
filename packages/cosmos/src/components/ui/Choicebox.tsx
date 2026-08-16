import {
	type ComponentProps,
	createContext,
	type HTMLAttributes,
	useContext,
} from 'react';
import {
	Field,
	FieldContent,
	FieldDescription,
	fieldLabelClass,
	FieldTitle,
} from './field';
import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { cn } from '../utils';

export type ChoiceboxProps = ComponentProps<typeof RadioGroup>;

export const Choicebox = ({ className, ...props }: ChoiceboxProps) => (
	<RadioGroup className={cn('w-full', className)} {...props} />
);

type ChoiceboxItemContextValue = {
	value: ChoiceboxItemProps['value'];
	id?: ChoiceboxItemProps['id'];
};

const ChoiceboxItemContext = createContext<ChoiceboxItemContextValue | null>(
	null,
);

const useChoiceboxItemContext = () => {
	const context = useContext(ChoiceboxItemContext);

	if (!context) {
		throw new Error(
			'useChoiceboxItemContext must be used within a ChoiceboxItem',
		);
	}

	return context;
};

// Base UI allows className to be a state callback; Choicebox forwards it to Field, which takes a string.
export type ChoiceboxItemProps = Omit<
	ComponentProps<typeof RadioGroupItem>,
	'className'
> & {
	className?: string;
	labelClassName?: string;
};

export const ChoiceboxItem = ({
	className,
	children,
	value,
	id,
	labelClassName,
}: ChoiceboxItemProps) => (
	<ChoiceboxItemContext.Provider value={{ value, id }}>
		{/* A plain label: Base UI's Field.Label must live inside Field.Root, but the
		    Choicebox card wraps it. */}
		<Label htmlFor={id} className={cn(fieldLabelClass, labelClassName)}>
			<Field className={className} orientation="horizontal">
				{children}
			</Field>
		</Label>
	</ChoiceboxItemContext.Provider>
);

export type ChoiceboxItemHeaderProps = ComponentProps<typeof FieldContent>;

export const ChoiceboxItemHeader = ({
	className,
	...props
}: ChoiceboxItemHeaderProps) => (
	<FieldContent className={className} {...props} />
);

export type ChoiceboxItemTitleProps = ComponentProps<typeof FieldTitle>;

export const ChoiceboxItemTitle = ({
	className,
	...props
}: ChoiceboxItemTitleProps) => <FieldTitle className={className} {...props} />;

export type ChoiceboxItemSubtitleProps = HTMLAttributes<HTMLSpanElement>;

export const ChoiceboxItemSubtitle = ({
	className,
	...props
}: ChoiceboxItemSubtitleProps) => (
	<span
		className={cn('font-normal text-muted-foreground text-xs', className)}
		{...props}
	/>
);

export type ChoiceboxItemDescriptionProps = ComponentProps<
	typeof FieldDescription
>;

export const ChoiceboxItemDescription = ({
	className,
	...props
}: ChoiceboxItemDescriptionProps) => (
	<FieldDescription className={className} {...props} />
);

export type ChoiceboxIndicatorProps = Partial<
	ComponentProps<typeof RadioGroupItem>
>;

export const ChoiceboxIndicator = (props: ChoiceboxIndicatorProps) => {
	const context = useChoiceboxItemContext();

	return (
		<RadioGroupItem
			{...props}
			value={context.value}
			className={cn('mt-0.5 self-start', props.className)}
		/>
	);
};
