import prepareValidationErrors from './utils/prepare-validation-errors';
import uniqueStringValidator from './validators/unique-string';
import { customMessagesMap } from './@messages';

export const validators = {
	uniqueStringValidator,
};

export const utils = {
	prepareValidationErrors,
};

export const messages = {
	customMap: customMessagesMap
}
