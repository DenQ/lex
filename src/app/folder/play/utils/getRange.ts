import _ from 'lodash';

import { Word } from 'common/@interfaces/words';
import handleSortList from './handleSortList';

type Input = {
  list: Word[];
  limit?: number;
};

const getRange = ({ list, limit = 10 }: Input) =>
  _.chain(list)
    .sortBy(handleSortList)
    .slice(0, limit)
    .sortBy(Math.random)
    .value();

export default getRange;
