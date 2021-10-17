import { useCallback } from 'react';
import { utils as validationUtils } from 'common/modules/validation';
import findByKeyValue from 'common/utils/find-by-key-value';
import { WordItemDTO } from 'common/@types/words';
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
			// TODO: Need to extract to utils
			const hasNotUnique = (key: string) => {
				const targetEntity = findByKeyValue<WordItemDTO>(
					words,
					key,
					values[key]
				);

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
