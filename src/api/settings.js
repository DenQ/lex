// import { fieldNames } from 'app/words/form/constants';
import entityTypes from 'common/@types/entity';

export const eject = async () => {
	const entitySerialized =
		window.localStorage.getItem(entityTypes.SETTINGS) || {};
	const entity = JSON.parse(entitySerialized);
	const result = await entity;
	return result;
};

export const inject = async ({ meta, payload }) => {
	const newEntitySerialized = JSON.stringify({
		meta,
		payload,
	});

	await window.localStorage.setItem(entityTypes.SETTINGS, newEntitySerialized);
};

export const fetchSettings = async () => {
	const { payload /* , meta */ } = await eject();
	return payload;
};

export const updateSettings = async data => {
	const { payload, meta } = await eject();

	console.log(34, data);

	return inject({
		meta,
		payload: {
			...payload,
			...data,
		},
	});
};
