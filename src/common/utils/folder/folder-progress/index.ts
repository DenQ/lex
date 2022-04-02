import _ from 'lodash';
import { MAX_COUNT_WINS } from 'app/folder/play/constants';
import { Word } from 'common/@interfaces/words';
import getPercent from 'common/utils/get-percent';

type Input = {
  maxCountWins: number;
  list: Word[];
};

export const calculateProgress = ({
  list,
  maxCountWins = MAX_COUNT_WINS,
}: Input) => {
  const maxAvailableValueList = list.length * maxCountWins;
  const value = _.chain(list)
    .map(item => {
      const wins = item.number_of_wins;

      if (wins >= maxCountWins) return maxCountWins;

      return wins;
    })
    .sum()
    .value();

  return getPercent(value, maxAvailableValueList);
};
