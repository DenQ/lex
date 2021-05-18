import React from 'react';
import Button from '@material-ui/core/Button';

import { OnSubmitType } from 'lib/form/base-form';

type FormProps = {
	dirty: boolean,
	valid: boolean,
};

export interface Props {
	formProps: FormProps;
	onSubmit: OnSubmitType
}

export const FormFooter = ({ formProps, onSubmit }: Props) => {
	const { valid, dirty } = formProps;
	const onClick = (e: any): void => {
		e && e.preventDefault();
		onSubmit({ formProps })
	};

	return (
		<Button
			type="submit"
			onClick={onClick}
			color="primary"
			disabled={!dirty || !valid}
		>
			Submit
		</Button>
	);
};
