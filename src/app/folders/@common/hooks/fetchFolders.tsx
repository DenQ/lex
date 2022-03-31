import _ from 'lodash';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { findAll } from 'api/folders';
import { Folders } from 'common/@interfaces/folders';
import { SettingsContext } from 'common/contexts/settings';

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
  const { settings } = useContext(SettingsContext);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await findAll();
      const transformedResponse = await transform(response, { settings });

      setList(transformedResponse);
      // setList(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [settings]);

  useEffect(() => {
    !_.isEmpty(settings) && fetch();
  }, [fetch, settings]);

  const noData = useMemo(() => !loading && list.length === 0, [loading, list]);

  return { list, loading, noData, fetch };
};

export default useFetchFolders;
