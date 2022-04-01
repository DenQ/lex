import { Word } from '../../../../common/@interfaces/words';
import { updateById } from '../../../../api/words';
import { fieldNames as wordFieldNames } from '../../../../common/@types/words';

export const setRate = ({
  targetWord,
  isSuccess,
}: {
  targetWord: Word;
  isSuccess: boolean;
}) => {
  const { id, number_of_wins: wins, number_of_attempts: attempts } = targetWord;

  return updateById({
    id,
    payload: {
      ...targetWord,
      [wordFieldNames.NUMBER_OF_ATTEMPTS]: attempts + 1,
      [wordFieldNames.NUMBER_OF_WINS]: isSuccess ? wins + 1 : wins,
    },
  });
};
