import { updateSettings } from 'api/settings';
import { fieldLabels, fieldNames, initialValues } from './constants';
//
// const { PLAY_COUNT_WORDS, PLAY_MAX_COUNT_WINS } = fieldNames;
//
// type TPayload = {
// 	[string: string]: number | string;
// };
// type TInput = {
// 	payload: TPayload;
// };
// type TOutput = TPayload;
// // payload: TPayload;
//
// export const getInitialize = ({ payload }: TInput): TOutput =>  ({
// 		...initialValues,
// 		...payload,
// 	})

export type TPayload = {
	[string: string]: number | string;
};

type TInput = {
	payload: TPayload;
};

export const changeSettings = async ({ payload }: TInput): Promise<void> => {
	try {
		const result = await updateSettings({
			...payload,
		});
		console.log(123, result);
	}	 catch (e) {
		console.log('Error', e);
	} finally {
		console.log('Fin!');
	}
};
