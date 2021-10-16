import { ValidationResult } from 'joi';
import { CustomValidationErrors } from '../@types';

const prepareValidationErrors = ({
	error,
}: ValidationResult): CustomValidationErrors => {
	const errors: CustomValidationErrors = {};
	const details = errors && error?.details;
	if (details && details?.length !== 0) {
		details.forEach(item => {
			const { message } = item;
			const key = item?.context?.key;
			if (key) {
				errors[key] = message;
			}
		});
	}
	return errors;
};

export default prepareValidationErrors;
