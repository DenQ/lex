import React from 'react';
// import { OnSubmitType } from 'lib/form/base-form';
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export interface Props {
	formProps: object;
	onSubmit: (args: any) => void;
	// onSubmit: OnSubmitType;
}

export const BaseFormHeader: React.FC<Props> = props => {
	const onClick = (e: ButtonEvent) => {
		e.preventDefault();
		props.onSubmit(props);
	};

	return (
		<button type="submit" onClick={onClick}>
			Submit
		</button>
	);
};
