import { useCallback } from 'react';

import { updateByFolderId } from 'api/words';
import { Word, WordFields } from 'common/@interfaces/words';
import { RestartFolderHandler } from '../types';

type Input = {
  id: number;
  setNeedReload: (v: number | null) => void;
};

type Output = RestartFolderHandler;

export default ({ id, setNeedReload }: Input): Output => {
  const restartFolderHandler: RestartFolderHandler = useCallback(() => {
    const payload = {
      [WordFields.NumberOfAttempt]: 0,
      [WordFields.NumberOfWins]: 0,
    } as Partial<Word>;

    updateByFolderId({ folderId: id, payload })
      .then(() => {
        setNeedReload(+new Date());
      })
      .catch(e => {
        console.error(e);
      });
  }, [id, setNeedReload]);

  return restartFolderHandler;
};
