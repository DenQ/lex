import { useCallback, useEffect, useMemo, useState } from 'react';
import { findAll } from 'api/folders';
import { findAll as findAllWords } from 'api/words';
import { Folders } from 'common/@interfaces/folders';
import { Word, Words } from '../../../../common/@interfaces/words';
import { calculateProgress } from '../../../../common/utils/folder/folder-progress';

type Output = {
  loading: boolean;
  noData: boolean;
  list: Folders;
  fetch: () => void;
};

const getListWords = async (folderId: number | undefined): Promise<Words> => {
  const criteria = (item: Word): boolean => item.folder_id === folderId;

  // @ts-ignore
  return findAllWords({ criteria });
};

const transform = async (listFolders: Folders): Promise<Folders> => {
  const pull = new Map();

  for (let i = 0; i < listFolders.length; i++) {
    const itemFolder = listFolders[i];
    // eslint-disable-next-line no-await-in-loop
    const l = await getListWords(itemFolder.id);
    const progress = calculateProgress({
      list: l,
      maxCountWins: 2,
    });
    pull.set(itemFolder.id, progress);
  }

  return listFolders.map(item => ({
    ...item,
    progress: pull.get(item.id),
  }));
};

const useFetchFolders = (): Output => {
  const [list, setList] = useState<Folders>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await findAll();
      const x = await transform(response);
      console.log(4444, x);

      setList(x);
      // setList(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const noData = useMemo(() => !loading && list.length === 0, [loading, list]);

  return { list, loading, noData, fetch };
};

export default useFetchFolders;
