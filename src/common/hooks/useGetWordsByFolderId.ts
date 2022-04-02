import { useEffect, useState } from 'react';

import { findAll } from 'api/words';
import { Word } from 'common/@interfaces/words';
import { Filter } from '../@types/general';

type Input = {
  folderId: number;
};

type Output = {
  list: Word[];
  loading: boolean;
};

const useGetWordsByFolderId = ({ folderId }: Input): Output => {
  const [list, setList] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const criteria: Filter<Word> = item => item.folder_id === folderId;
      const list = await findAll({ criteria });

      setList(list);
    } catch (e) {
      console.log('error', e);
    } finally {
      setLoading(false);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetch();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return {
    list,
    loading,
  };
};

export default useGetWordsByFolderId;
