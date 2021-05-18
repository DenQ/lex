import React from 'react';
import Button from '@material-ui/core/Button';


// import { updateSettings } from 'api/settings';
import { OnSubmitType } from 'lib/form/base-form';

type FormProps = {
	dirty: boolean,
};

export interface Props {
	formProps: FormProps;
	onSubmit: OnSubmitType
}

export const FormFooter = ({ formProps, onSubmit }: Props) => {
	const onClick = (e: any): void => {
		e && e.preventDefault();
		// console.log(4444, formProps);
		onSubmit({ formProps })
	};

	return (
		<Button
			type="submit"
			onClick={onClick}
			color="primary"
			disabled={!formProps.dirty}
		>
			Submit
		</Button>
	);
};
