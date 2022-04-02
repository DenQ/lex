import entityTypes from 'common/@types/entity';
import { EjectSettings, Settings } from 'common/@interfaces/settings';
import { defaultSettings } from 'common/@contants/settings';

export const eject = async (): Promise<EjectSettings> => {
  const entitySerialized = window.localStorage.getItem(
    entityTypes.SETTINGS
  ) as string;
  let result = {
    meta: {},
    payload: defaultSettings
  };

  try {
    const entity = JSON.parse(entitySerialized);

    result = await entity;
  } catch (e) {
    console.error(e);
  }

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
  let result = defaultSettings;
  
  try {
    const { payload } = await eject();

    result = payload;
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const updateSettings = async (data: Partial<Settings>): Promise<void> => {
  try {
    const { payload, meta } = await eject();

    await inject({
      meta,
      payload: {
        ...payload,
        ...data,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
