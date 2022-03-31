import { useEffect, useState } from 'react';
import { findAll } from 'api/words';
import { Word, Words } from 'common/@interfaces/words';

type Input = {
  folderId: number;
};

type Output = {
  list: Words;
  loading: boolean;
};

const useGetWordsByFolderId = ({ folderId }: Input): Output => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const criteria = (item: Word) => item.folder_id === folderId;
      // @ts-ignore
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
