import entityTypes from 'common/@types/entity';
import { EjectSettings, Settings } from 'common/@interfaces/settings';
import { defaultSettings } from 'common/@contants/settings';

export const eject = async (): Promise<EjectSettings> => {
  const entitySerialized = window.localStorage.getItem(
    entityTypes.SETTINGS
  ) as string;
  const entity = JSON.parse(entitySerialized);
  const result = await entity;

  return result;
};

export const inject = async ({
  meta,
  payload,
}: EjectSettings): Promise<void> => {
  const newEntitySerialized = JSON.stringify({
    meta,
    payload,
  }) as string;

  await window.localStorage.setItem(entityTypes.SETTINGS, newEntitySerialized);
};

export const fetchSettings = async (): Promise<Settings> => {
  const { payload } = await eject();

  return payload || defaultSettings;
};

export const updateSettings = async (
  data: Partial<Settings>
): Promise<void> => {
  const { payload, meta } = await eject();

  await inject({
    meta,
    payload: {
      ...payload,
      ...data,
    },
  });
};
