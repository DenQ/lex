import { useCallback, useEffect, useMemo, useState } from 'react';

import { findAll } from 'api/folders';
import { Folders } from 'common/@interfaces/folders';

import { transform } from '../utils/transform-folders/transformFolders';

type Output = {
  loading: boolean;
  noData: boolean;
  list: Folders;
  fetch: () => void;
};

const useFetchFolders = (): Output => {
  const [list, setList] = useState<Folders>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await findAll();
      const transformedResponse = await transform(response);

      setList(transformedResponse);
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
