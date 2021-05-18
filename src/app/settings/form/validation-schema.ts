import * as Yup from 'yup';
import { errorMessages } from 'common/@messages/errors';
import { fieldNames, initialValues } from './constants';

export default Yup.object().shape({
	[fieldNames.PLAY_COUNT_WORDS]: Yup.number()
		.required(errorMessages.IS_REQUIRED)
		.positive(errorMessages.SHOULD_BE_POSITIVE)
		.integer(errorMessages.SHOULD_BE_INTEGER),
	[fieldNames.PLAY_MAX_COUNT_WINS]: Yup.number()
		.required(errorMessages.IS_REQUIRED)
		.positive(errorMessages.SHOULD_BE_POSITIVE)
		.integer(errorMessages.SHOULD_BE_INTEGER),
});
