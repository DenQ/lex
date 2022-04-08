import { IKeyValue } from 'common/@interfaces';
import { defaultSettings } from 'common/@contants/settings';

export const preparePayload = (data: IKeyValue): IKeyValue => ({
	...defaultSettings,
	...data,
});
