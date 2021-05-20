import { updateSettings } from 'api/settings';
import { IKeyValue } from 'common/@interfaces';
import { preparePayload } from 'common/utils/settings/utils';

type TInput = {
	payload: IKeyValue;
	afterSuccessSubmit: () => void;
	afterErrorSubmit: () => void;
};

export const changeSettings = async ({
	payload,
	afterSuccessSubmit,
	afterErrorSubmit,
}: TInput): Promise<void> => {
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
