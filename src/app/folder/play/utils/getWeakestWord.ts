import _ from 'lodash';

import { Word } from 'common/@interfaces/words';
import handleSortList from './handleSortList';

type Input = {
  list: Word[];
};

const getWeakestWord = ({ list }: Input): Word | null =>
  _.chain(list).minBy(handleSortList).value();

export default getWeakestWord;
