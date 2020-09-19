import React from 'react';
import { Form } from 'react-final-form'
import PropTypes from 'prop-types';

import RefreshContext from 'common/contexts/refetch-context';

import { submitHandler } from './utils';
import { fieldNames } from './constants';
import InputControl from './components/input-control';


const initialValues = {
	[fieldNames.ID]: null,
	[fieldNames.FOLDER_ID]: null,
	[fieldNames.WORD_NATIVE]: '',
	[fieldNames.WORD_TRANSLATION]: '',
};

const EntityForm = ({
	initialValues,
	readOnly,
}) => {
    const {
		wordsReload,
		setWordsReload,
	} = React.useContext(RefreshContext);
	const validate = () => { };

	const onSuccessSubmit = ({ form }) => {
		console.log('success', form);
		setTimeout(() => {
			form.reset();
			setWordsReload(wordsReload + 1);
		}, 0);
	}

	return (
		<Form
			onSubmit={submitHandler({ onSuccessSubmit })}
			validate={validate}
			initialValues={initialValues}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<br />
					<div>
						<label>ID</label>
						<InputControl fieldName={fieldNames.ID} placeholder="NEW" readOnly disabled />
					</div>

					<div>
						<label>Folder ID</label>
						<InputControl fieldName={fieldNames.FOLDER_ID} placeholder="NEW" readOnly />
					</div>

					<div>
						<label>Word Native</label>
						<InputControl fieldName={fieldNames.WORD_NATIVE} placeholder="Native" readOnly={readOnly} />
					</div>

					<div>
						<label>Word Translation</label>
						<InputControl fieldName={fieldNames.WORD_TRANSLATION} placeholder="Translation" readOnly={readOnly} />
					</div>

					<button type="submit">Save</button>
				</form>
			)}
		/>
	);
}


EntityForm.propTypes = {
	initialValues: PropTypes.shape({
		[fieldNames.ID]: PropTypes.number,
		[fieldNames.FOLDER_ID]: PropTypes.number,
		[fieldNames.WORD_NATIVE]: PropTypes.string,
		[fieldNames.WORD_TRANSLATION]: PropTypes.string,
	}),
	readOnly: PropTypes.bool,
};

EntityForm.defaultProps = {
	initialValues,
	readOnly: false,
};

export default EntityForm;