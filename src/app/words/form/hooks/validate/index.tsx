import { useCallback } from 'react';
import { utils as validationUtils } from 'common/utils/validation';
import { findKeyValue } from '../../utils';
import validationWordSchema from '../../validationSchema';

type Input = {
	words: Array<any>;
};

type OutputValidateFn = {
	[string: string]: string;
};

type Values = {
	[string: string]: any;
};

type Output = {
	validate: (values: Values) => OutputValidateFn;
};

const useValidate = ({ words }: Input): Output => {
	const validate = useCallback(
		(values: Values): OutputValidateFn => {
			const hasNotUnique = (key: string) => {
				// TODO: move to common
				const targetEntity = findKeyValue({
					words,
					key,
					value: values[key],
				});

				return targetEntity && targetEntity.id !== values.id;
			};

			const errors = {};
			const validationErrors = validationWordSchema.validate(values, {
				context: { hasNotUnique },
			});

			return {
				...errors,
				...validationUtils.prepareValidationErrors(validationErrors),
			};
		},
		[words]
	);

	return {
		validate,
	};
};

export default useValidate;
