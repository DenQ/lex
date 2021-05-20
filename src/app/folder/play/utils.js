import _ from 'lodash';

import { updateById } from 'api/words';
import { fieldNames as wordFieldNames } from 'app/words/form/constants';
import urlManager from 'common/utils/url-manager';

import { MAX_COUNT_WINS } from './constants';

export const getWeakestWord = ({ list }) =>
	_.chain(list).minBy(handleSortList).value();

export const getRange = ({ list, targetWord, limit = 10 }) =>
	_.chain(list)
		.sortBy(handleSortList)
		.slice(0, limit)
		.sortBy(Math.random)
		.value();

export const handleSortList = item => {
	const wins = item[wordFieldNames.NUMBER_OF_WINS] || 0;
	const attempts = item[wordFieldNames.NUMBER_OF_ATTEMPTS] || 0;

	if ([null, undefined].includes(wins) || [null, undefined].includes(attempts))
		return 0;
	if (wins === 0 || attempts === 0) return 0;

	return wins;
};

export const setRate = ({ targetWord, isSuccess }) => {
	const {
		[wordFieldNames.ID]: id,
		[wordFieldNames.NUMBER_OF_WINS]: wins,
		[wordFieldNames.NUMBER_OF_ATTEMPTS]: attempts,
	} = targetWord;

	return updateById({
		id,
		payload: {
			...targetWord,
			[wordFieldNames.NUMBER_OF_ATTEMPTS]: attempts + 1,
			[wordFieldNames.NUMBER_OF_WINS]: isSuccess ? wins + 1 : wins,
		},
	});
};

export const calculateProgress = ({ list, maxCountWins = MAX_COUNT_WINS }) => {
	const maxAvalableValueList = list.length * maxCountWins;
	const value = _.chain(list)
		.map(item => {
			const wins = item[wordFieldNames.NUMBER_OF_WINS];
			if (wins >= maxCountWins) return maxCountWins;
			return wins;
		})
		.sum()
		.value();

	return Math.round((value * 100) / maxAvalableValueList);
};

export const buildBreadCrumbsProps = ({ folderId, folderName }) => [
	{
		to: urlManager.home(),
		title: 'Home',
	},
	{
		to: urlManager.folder().show(folderId),
		title: `Folder (${folderName})`,
	},
	{
		to: undefined,
		title: 'Play',
	},
];
