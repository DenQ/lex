import React from 'react';

export interface Props {
	formProps: any;
}

export const BaseFormHeader: React.FC<Props> = (props) => {
	const onClick = () => {
		console.log(4444, props);
	};

	return (
		<button type="submit" onClick={onClick}>
			Submit
		</button>
	);
};