import { Word } from '../../../../common/@interfaces/words';

export const handleSortList = (item: Word) => {
  const wins = item.number_of_wins || 0;
  const attempts = item.number_of_attempts || 0;

  if (wins === 0 || attempts === 0) return 0;

  return wins;
};
