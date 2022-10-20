import React, { forwardRef as baseForwardRef } from 'react';

export type As<Props = any> = React.ElementType<Props>;

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
	Target,
	"transition" | "as" | "color" | OmitAdditionalProps
>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
	as?: As;
};

export type RightJoinProps<
	SourceProps extends object = {},
	OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export function forwardRef<Props extends object, Component extends As>(
	Component: React.ForwardRefRenderFunction<
		any,
		RightJoinProps<PropsOf<>>
	>
);