import { updateSettings } from 'api/settings';
import { fieldNames } from './constants';

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
