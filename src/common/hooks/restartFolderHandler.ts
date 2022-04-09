import { useCallback } from 'react';

import { updateByFolderId } from 'api/words';
import { RestartFolderHandler } from 'app/folder/play/types';
import { Word, WordFields } from 'common/@interfaces/words';

type Input = {
  id: number;
  setNeedReload: (v: number | null) => void;
};

export default ({ id, setNeedReload }: Input): RestartFolderHandler => useCallback(() => {
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
