import { fieldNames } from 'app/words/form/constants';
import entityTypes from 'common/@types/entity';

export const eject = async () => {
	const entitySerialized = window.localStorage.getItem(entityTypes.WORDS);
	const entity = JSON.parse(entitySerialized);
	return await entity;
};

export const inject = async ({ meta, list }) => {
	const newEntitySerialized = JSON.stringify({
		meta,
		list,
	});

	await window.localStorage.setItem(entityTypes.WORDS, newEntitySerialized);
};

export const findById = async ({ id }) => {
	const { list } = await eject();
	return await list.find(item => Number(item.id) === Number(id));
};

export const findAll = async ({ criteria = () => true }) => {
	const { list } = await eject();
	return await list.filter(criteria);
};

export const count = async ({ criteria = () => true }) => {
	const list = await findAll({ criteria });
	return list.length;
};

export const removeById = async ({ id }) => {
	const { list, meta } = await eject();
	const newList = list.filter(item => item.id !== id);

	return await inject({
		meta,
		list: newList,
	});
};

export const removeByFolderId = async ({ folderId }) => {
	const { list, meta } = await eject();
	const newList = list.filter(item => item.folder_id !== folderId);

	return await inject({
		meta,
		list: newList,
	});
};

export const updateById = async ({ id, payload }) => {
	const { list, meta } = await eject();
	const word = await findById({ id });

	if (!word) return null;
	// TODO: need exclude ID. Via _.omit(...)
	const newWord = {
		...word,
		...payload,
	};
	const newList = list.map(item => {
		if (item[fieldNames.ID] === id) return newWord;
		return item;
	});

	return await inject({
		meta,
		list: newList,
	});
};

export const updateByFolderId = async ({ folderId, payload }) => {
	const { list, meta } = await eject();
	const newList = list.map(word => {
		if (word.folder_id === folderId) {
			return {
				...word,
				...payload,
			};
		}
		return word;
	});

	return await inject({
		meta,
		list: newList,
	});
};
