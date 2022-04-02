import entityTypes from 'common/@types/entity';
import { EjectFolder, Folder } from 'common/@interfaces/folders';

export const eject = async (): Promise<EjectFolder> => {
  const foldersEntitySerialized = window.localStorage.getItem(
    entityTypes.FOLDERS
  ) as string;
  let result = null;

  try {
    const foldersEntity = JSON.parse(foldersEntitySerialized);

    result = await foldersEntity;
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const inject = async ({ meta, list }: EjectFolder): Promise<void> => {
  const newEntitySerialized = JSON.stringify({
    meta,
    list,
  }) as string;

  await window.localStorage.setItem(entityTypes.FOLDERS, newEntitySerialized);
};

export const findById = async ({
  id,
}: {
  id: number;
}): Promise<Folder | undefined> => {
  let result;

  try {
    const { list } = await eject();

    result = await list.find(item => Number(item.id) === Number(id));
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const findAll = async (): Promise<Folder[]> => {
  const { list } = await eject();

  return list;
};

export const removeById = async ({ id }: { id: number }): Promise<boolean> => {
  const { list, meta } = await eject();
  const newList = list.filter(item => item.id !== id);

  const hasRemoveItem = list.length !== newList.length;

  try {
    if (hasRemoveItem) {
      await inject({
        meta,
        list: newList,
      });
    }
  } catch (e) {
    console.error(e);
  }

  return Promise.resolve(hasRemoveItem);
};
