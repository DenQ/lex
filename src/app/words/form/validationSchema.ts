import Joi from 'joi';
import { fieldNames } from 'common/@types/words';
import {
	validators as customValidators,
	messages,
} from 'common/modules/validation';

const validationWordSchema = Joi.object({
	[fieldNames.WORD_NATIVE]: Joi.string()
		.min(2)
		.max(255)
		.required()
		.custom(customValidators.uniqueStringValidator)
		.messages(messages.customMap),

	[fieldNames.WORD_TRANSLATION]: Joi.string()
		.min(2)
		.max(255)
		.required()
		.custom(customValidators.uniqueStringValidator)
		.messages(messages.customMap),

	[fieldNames.FOLDER_ID]: Joi.number(),

	[fieldNames.ID]: Joi.number(),
});

export default validationWordSchema;
