import _ from 'lodash';

import { Words } from '../../../../common/@interfaces/words';
import { handleSortList } from './handleSortList';

export const getWeakestWord = ({ list }: { list: Words }) =>
  _.chain(list).minBy(handleSortList).value();
