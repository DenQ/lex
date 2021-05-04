import React, { ReactElement } from 'react';
import { Form } from 'react-final-form';
import { makeValidate } from 'mui-rff';
import { BaseFormHeader } from './components/footer';

export interface Props {
	initialValues: any;
	validationSchema?: any;
	onSubmit: () => {};
	debug?: boolean;
	Footer?: ReactElement;
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
			<form onSubmit={onSubmit}>
				{debug && <pre>{JSON.stringify(formProps, null, 2)}</pre>}
				{children}
				<Footer formProps={formProps} />
			</form>
		)}
	/>
);
