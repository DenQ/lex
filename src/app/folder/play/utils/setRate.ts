import { updateById } from 'api/words';
import { Word, WordFields } from 'common/@interfaces/words';

type Input = {
  targetWord: Word;
  isSuccess: boolean;
}

const setRate = ({
  targetWord,
  isSuccess,
}: Input) => {
  const { id, number_of_wins: wins, number_of_attempts: attempts } = targetWord;

  return updateById({
    id,
    payload: {
      ...targetWord,
      [WordFields.NumberOfAttempt]: attempts + 1,
      [WordFields.NumberOfWins]: isSuccess ? wins + 1 : wins,
    },
  });
};

export default setRate;
