import _ from 'lodash';

import { fieldNames as wordFieldNames } from 'app/words/form/constants';

export const getWeakestWord = ({ list }) => {
    return _.chain(list)
        .sortBy((item) => {
            const wins = item[wordFieldNames.NUMBER_OF_WINS] || 0;
            const attempts = item[wordFieldNames.NUMBER_OF_ATTEMPTS] || 0;

            if (!wins || !attempts) return 0;

            return wins / attempts;
        })
        .head()
        .value();
};

export const getRange = ({ list, targetWord, limit = 5 }) => {
    return _.chain(list)
        .filter((item) => item[wordFieldNames.ID] !== targetWord[wordFieldNames.ID])
        .sortBy(Math.random)
        .slice(0, limit)
        .value();
};