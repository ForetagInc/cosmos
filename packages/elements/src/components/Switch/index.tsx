import React, { FC, useRef, useEffect, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const switchClasses = cva([
	`hide bg:han-purple:checked+svg opacity:.7[disabled]+svg
	filter:none[disabled]+svg>rect 
	width:34:active:not([disabled])+svg>rect 
	cursor:no-drop[disabled]+svg
	translateX(16):checked+svg>rect
	translateX(13):checked:active:not([disabled])+svg>rect`,
], {
	variants: {
		disabled: { true: 'cursor:disabled' }
	}
});

export interface ISwitchProps extends VariantProps<typeof switchClasses> {
	checked?: boolean;

	icon?: ReactNode;
	iconOn?: ReactNode;
	iconOff?: ReactNode;
};

export const Switch: FC<ISwitchProps> = (props) => {
	const input = useRef<HTMLInputElement>();

	useEffect(() => {
		if (props.checked) input.current.checked = props.checked;
	}, []);

	return <label className='inline-flex ai:center ml:10'>
		<input
			ref={input}
			className={switchClasses()}
			type='checkbox'
		/>
		<svg className='width:40 height:24 bg:fade-90 bg:eerie-black@dark rounded ~background-color|.3s cursor:pointer'>
			<rect className='~transform|.1s|ease-out,width|.1s|ease-out drop-shadow(0|2|2|rgba(0,0,0,.2))' x='2' y='2' rx='14' width='20' height='20' fill='#fff' />
		</svg>
	</label>;
};

Switch.defaultProps = {
	checked: false,
	disabled: false,
};