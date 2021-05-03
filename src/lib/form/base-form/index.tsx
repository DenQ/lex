import React from 'react';
import { Form } from 'react-final-form';

export interface Props {
	validate: ()=> {},
	initialValues: any,
	onSubmit: () => {},
	debug?: boolean;
}

export const BaseForm: React.FC<Props> = ({
	validate,
	initialValues,
	onSubmit,
	debug = false,
	children,
}) => (
	<Form
		validate={validate}
		initialValues={initialValues}
		onSubmit={() => {}}
		render={props => (
			<form onSubmit={onSubmit} >
				{debug && (
					<pre>{JSON.stringify(props, null, 2)}</pre>
				)}
				{children}
				<button type="submit">Submit</button>
			</form>
		)}
	/>
);
