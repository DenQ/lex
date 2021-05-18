import entityTypes from 'common/@types/entity';

const defaultEntityView = {
	list: [],
	meta: {
		lastId: 0,
	},
};

const keyValueEntityView = {
	payload: {},
	meta: {},
};

export default () => {
	[entityTypes.FOLDERS, entityTypes.WORDS].forEach(key => {
		if (!window.localStorage.getItem(key)) {
			window.localStorage.setItem(key, JSON.stringify(defaultEntityView));
		}
	});
	[entityTypes.SETTINGS].forEach(key => {
		if (!window.localStorage.getItem(key)) {
			window.localStorage.setItem(key, JSON.stringify(keyValueEntityView));
		}
	});
};
