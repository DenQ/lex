import { updateSettings } from 'api/settings';
import { fieldNames } from './constants';
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
			...preparePayload(payload),
		});
		// need to refresh page
		console.log(123, result);
	} catch (e) {
		// need to show error info
		console.log('Error', e);
	} finally {
		console.log('Fin!');
	}
};

export const preparePayload = (data: TPayload): TPayload => ({
	[fieldNames.PLAY_COUNT_WORDS]: Number(data[fieldNames.PLAY_COUNT_WORDS]),
	[fieldNames.PLAY_MAX_COUNT_WINS]: Number(
		data[fieldNames.PLAY_MAX_COUNT_WINS]
	),
});
