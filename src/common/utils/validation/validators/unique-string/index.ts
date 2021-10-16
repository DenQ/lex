import _ from 'lodash';
import { CustomHelpers } from 'joi';

/**
 * NOTE. Expected key name for callback function
 */
const CALLBACK_KEY = 'hasNotUnique';

const uniqueStringValidator = (value: string, helper: CustomHelpers) => {
	const fieldKey = _.get(helper, 'state.path.0');
	if (!fieldKey) return value;

	const hasNotUnique = _.get(helper, `prefs.context.${CALLBACK_KEY}`);
	if (hasNotUnique && hasNotUnique(fieldKey)) {
		return helper.error('string.unique');
	}
	return value;
};

export default uniqueStringValidator;
