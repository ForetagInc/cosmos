import React, { FC } from 'react';
import { checkboxStyles } from './styles';

export interface ICheckboxProps {
	label: string;
}

export const Checkbox: FC<ICheckboxProps> = ({ label, ...props }) => {
	return <label className={checkboxStyles(props)}>
		<input type={'checkbox'} />
		{label}
	</label>
}