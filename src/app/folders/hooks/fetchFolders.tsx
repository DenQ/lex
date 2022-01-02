import React, { useCallback, useMemo, useState } from 'react';
import { findAll } from 'api/folders';
import { Folders } from 'common/@interfaces/folders';

type Output = {
  loading: boolean;
  noData: boolean;
  list: Folders;
};

const useFetchFolders = (): Output => {
  const [list, setList] = useState<Folders>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await findAll();
      setList(response);
    } catch (e) {
      console.error(7777, e);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetch();
  }, [fetch]);

  const noData = useMemo(() => !loading && list.length === 0, [loading, list]);

  return { list, loading, noData };
};

export default useFetchFolders;
