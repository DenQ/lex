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
	afterSuccessSubmit: () => void
	afterErrorSubmit: () => void
};

export const changeSettings = async ({ payload, afterSuccessSubmit, afterErrorSubmit }: TInput): Promise<void> => {
	try {
		await updateSettings({
			...preparePayload(payload),
		});
		afterSuccessSubmit();
	} catch (e) {
		console.log('Error', e);
		afterErrorSubmit();
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
