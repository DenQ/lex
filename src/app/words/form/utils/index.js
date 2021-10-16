import { eject as ejectWords, inject as injectWords } from 'api/words';
import { fieldNames } from 'common/@types/words';

export const submitHandler = ({ onSuccessSubmit }) => async (values, form) => {
	const { list, meta } = await ejectWords();
	const isNew = !values[fieldNames.ID];

	// console.log(3333, values);
	if (isNew) {
		meta.lastId++;
		list.push({
			...values,
			[fieldNames.ID]: meta.lastId,
			[fieldNames.NUMBER_OF_ATTEMPTS]: 0,
			[fieldNames.NUMBER_OF_WINS]: 0,
		});
	} else {
		list.forEach((item, index) => {
			if (Number(item.id) === Number(values[fieldNames.ID])) {
				list[index][fieldNames.WORD_NATIVE] = values[fieldNames.WORD_NATIVE];
				list[index][fieldNames.WORD_TRANSLATION] =
					values[fieldNames.WORD_TRANSLATION];
				list[index][fieldNames.NUMBER_OF_ATTEMPTS] =
					values[fieldNames.NUMBER_OF_ATTEMPTS] || 0;
				list[index][fieldNames.NUMBER_OF_WINS] =
					values[fieldNames.NUMBER_OF_WINS] || 0;
			}
		});
	}

	await injectWords({
		meta,
		list,
	});

	await onSuccessSubmit({ values, form });
};
