import PropTypes from 'prop-types';

export const fieldNames = {
	ID: 'id',
	FOLDER_ID: 'folder_id',
	WORD_NATIVE: 'word_native',
	WORD_TRANSLATION: 'word_translation',
	NUMBER_OF_ATTEMPTS: 'number_of_attempts',
	NUMBER_OF_WINS: 'number_of_wins',
};

export const ModelProps = PropTypes.shape({
	[fieldNames.ID]: PropTypes.number.isRequired,
	[fieldNames.FOLDER_ID]: PropTypes.number.isRequired,
	[fieldNames.WORD_NATIVE]: PropTypes.string.isRequired,
	[fieldNames.WORD_TRANSLATION]: PropTypes.string.isRequired,
	[fieldNames.NUMBER_OF_ATTEMPTS]: PropTypes.number,
	[fieldNames.NUMBER_OF_WINS]: PropTypes.number,
});

export const initialValues = {
	[fieldNames.ID]: null,
	[fieldNames.FOLDER_ID]: null,
	[fieldNames.WORD_NATIVE]: '',
	[fieldNames.WORD_TRANSLATION]: '',
};

export type WordItemDTO = {
	id: number;
	folder_id: number;
	word_native: string;
	word_translation: string;
	number_of_attempts: string;
	number_of_wins: string;
};
