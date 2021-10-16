import Joi from 'joi';
import { fieldNames } from 'common/@types/words';
import { validators as customValidators } from '../../../common/utils/validation';


// TODO: move to common
// TODO: add messages
const messagesMap = {
	'string.unique': 'Value should be unique',
};

const validationWordSchema = Joi.object({
	[fieldNames.WORD_NATIVE]: Joi.string()
		.alphanum()
		.min(2)
		.max(255)
		.required()
		.custom(customValidators.uniqueStringValidator)
		.messages(messagesMap),

	[fieldNames.WORD_TRANSLATION]: Joi.string()
		.alphanum()
		.min(2)
		.max(255)
		.required()
		.custom(customValidators.uniqueStringValidator)
		.messages(messagesMap),

	[fieldNames.FOLDER_ID]: Joi.number(),

	[fieldNames.ID]: Joi.number(),
});

export default validationWordSchema;
