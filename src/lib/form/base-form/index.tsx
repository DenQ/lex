import React from 'react';
import { Form } from 'react-final-form';
import { makeValidate } from 'mui-rff';
import { AnySchema } from 'yup';
import { BaseFormHeader } from './components/footer';

export interface Props {
	onSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	initialValues: object;
	validationSchema?: AnySchema;
	Footer?: React.FC;
	debug?: boolean;
}

export const BaseForm: React.FC<Props> = ({
	initialValues,
	onSubmit,
	debug = false,
	children,
	validationSchema = {},
	Footer = BaseFormHeader,
}) => (
	<Form
		validate={makeValidate(validationSchema)}
		initialValues={initialValues}
		onSubmit={() => {}}
		render={formProps => (
			// @ts-ignore
			<form onSubmit={onSubmit}>
				{debug && <pre>{JSON.stringify(formProps, null, 2)}</pre>}
				{children}
				<Footer formProps={formProps} />
			</form>
		)}
	/>
);
