import { IKeyValue } from 'common/@interfaces';
import { fieldNames } from 'common/@types/settings';

export const preparePayload = (data: IKeyValue): IKeyValue => ({
	[fieldNames.PLAY_COUNT_WORDS]: Number(data[fieldNames.PLAY_COUNT_WORDS]),
	[fieldNames.PLAY_MAX_COUNT_WINS]: Number(
		data[fieldNames.PLAY_MAX_COUNT_WINS]
	),
});
