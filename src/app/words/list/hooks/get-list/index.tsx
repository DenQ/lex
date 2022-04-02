import { useContext, useEffect, useState } from 'react';

import { findAll } from 'api/words';
import { Word } from 'common/@interfaces/words';
import { Filter } from 'common/@types/general';
import RefreshContext from 'common/contexts/refetch-context';

type K = () => boolean;

type Input = {
  folderId: number;
  needRefresh: string;
  prepareList?: (list: Word[]) => Word[];
};

type Output = Word[];

export const useGetList = ({
  folderId,
  needRefresh,
  prepareList = l => l,
}: Input): Output => {
  const { wordsReload } = useContext(RefreshContext);
  const [list, setList] = useState<Word[]>([]);

  useEffect(() => {
    const criteria: Filter<Word> = (item): boolean =>
      Number(item.folder_id) === Number(folderId);

    findAll({ criteria } as { criteria: K }).then(results => {
      setList(prepareList(results));
    });
  }, [folderId, wordsReload, needRefresh, prepareList]);

  return list;
};
