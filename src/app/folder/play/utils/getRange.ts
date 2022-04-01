import _ from 'lodash';
import { Word, Words } from '../../../../common/@interfaces/words';
import { handleSortList } from './handleSortList';

export const getRange = ({
  list,
  targetWord,
  limit = 10,
}: {
  list: Words;
  targetWord: Word;
  limit?: number;
}) =>
  _.chain(list)
    .sortBy(handleSortList)
    .slice(0, limit)
    .sortBy(Math.random)
    .value();
