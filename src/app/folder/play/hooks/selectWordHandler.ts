import { useCallback } from 'react';

import { Word, WordFields } from 'common/@interfaces/words';

import { SelectWordHandler } from '../types';
import setRate from '../utils/setRate';

type Input = {
  setErrorItem: (v: Word | null) => void;
  setNeedReload: (v: number | null) => void;
};

type Output = SelectWordHandler;

const useSelectWordHandler = ({ setErrorItem, setNeedReload }: Input): Output =>
  useCallback(
    ({ targetWord, selectedWord }): void => {
      const isSuccess =
        targetWord[WordFields.Id] === selectedWord[WordFields.Id];

      setRate({
        targetWord,
        isSuccess,
      })
        .then(r => {
          if (!isSuccess) {
            setErrorItem(selectedWord);
          }
          setTimeout(() => {
            setNeedReload(+new Date());
            setErrorItem(null);
          }, 300);
        })
        .catch(e => {
          console.error(e);
        });
    },
    [setErrorItem, setNeedReload]
  );

export default useSelectWordHandler;
