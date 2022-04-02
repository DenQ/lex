import { useEffect, useMemo, useState } from 'react';
import { fetchSettings } from 'api/settings';
import { initialValues } from 'common/@types/settings';

export type TSettings = {
  [string: string]: string | number;
};

export type TOutput = {
  loading: boolean;
  reload: () => void;
  settings: TSettings;
  initValues: TSettings;
};

export const useFetch = (): TOutput => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({});
  const [needReload, setNeedReload] = useState(+new Date());

  const reload = () => {
    setNeedReload(+new Date());
  };

  useEffect(() => {
    setLoading(true);
    fetchSettings().then(payload => {
      setTimeout(() => {
        setSettings(payload);
        setLoading(false);
      }, 200);
    });
  }, [needReload]);

  const initValues = useMemo(
    () => ({
      ...initialValues,
      ...settings,
    }),
    [settings]
  );

  return {
    loading,
    reload,
    settings,
    initValues,
  };
};
