import { useCallback } from 'react';
import { utils as validationUtils } from 'common/modules/validation';
import { WordItemDTO } from 'common/@types/words';
import validationWordSchema from '../../validationSchema';
import hasNotUnique from '../../utils/has-not-unique';

type Input = {
	words: Array<any>;
};

type OutputValidateFn = {
	[string: string]: string;
};

type Values = WordItemDTO;

type Output = {
	validate: (values: Values) => OutputValidateFn;
};

const useValidate = ({ words }: Input): Output => {
	const validate = useCallback(
		(values: Values): OutputValidateFn => {

			const errors = {};
			const validationErrors = validationWordSchema.validate(values, {
				context: { hasNotUnique: hasNotUnique(words, values) },
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
