import _ from 'lodash';
import Joi from 'joi';
import { fieldNames } from 'common/@types/words';

// TODO: extract to common
// TODO: remove any types
const uniqueStringValidator = (value: any, helper: any) => {
	const fieldKey = _.get(helper, 'state.path.0');
	if (!fieldKey) return value;

	const hasNotUnique = helper.prefs.context?.hasNotUnique;
	if (hasNotUnique && hasNotUnique(fieldKey)) {
		return helper.error('string.unique');
	}
	return value;
};

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
		.custom(uniqueStringValidator)
		.messages(messagesMap),

	[fieldNames.WORD_TRANSLATION]: Joi.string()
		.alphanum()
		.min(2)
		.max(255)
		.required()
		.custom(uniqueStringValidator)
		.messages(messagesMap),

	[fieldNames.FOLDER_ID]: Joi.number(),

	[fieldNames.ID]: Joi.number(),
});

export default validationWordSchema;
