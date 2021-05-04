import React, { useMemo, useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { makeValidate } from 'mui-rff';


export interface Props {
	initialValues: any;
	validationSchema?: any;
	onSubmit: () => {};
	debug?: boolean;
}

export const BaseForm: React.FC<Props> = ({
	initialValues,
	onSubmit,
	debug = false,
	children,
	validationSchema = {},
}) => {
	const onClick = () => {
	};

	return (
		<Form
			validate={makeValidate(validationSchema)}
			initialValues={initialValues}
			onSubmit={() => {}}
			render={props => (
				<form onSubmit={onSubmit}>
					{debug && <pre>{JSON.stringify(props, null, 2)}</pre>}
					{children}
					<button type="submit" onClick={onClick}>
						Submit
					</button>
				</form>
			)}
		/>
	);
};
