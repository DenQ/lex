import { Word } from 'common/@interfaces/words';

type Input = {
  countWins: number;
  list: Word[];
};

const getLearnedWords = ({ countWins, list }: Input): number =>
  list
    .map(({ number_of_wins }: Word) => number_of_wins >= countWins)
    .filter((value: boolean) => value).length;

export default getLearnedWords;
