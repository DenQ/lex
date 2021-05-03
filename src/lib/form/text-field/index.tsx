import React from 'react';
import { TextField as MUITextField, showErrorOnBlur } from 'mui-rff';

export interface Props {
	name: string;
	label: string;
	placeholder?: string;
	readOnly?: boolean;
}

export const TextField = ({
	name,
	label,
	placeholder = '',
	readOnly = false,
}: Props) => (
	<MUITextField
		name={name}
		label={label}
		placeholder={placeholder}
		disabled={readOnly}
		showError={showErrorOnBlur}
	/>
);
