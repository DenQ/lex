import entityTypes from 'common/@types/entity';
import { EjectFolder, Folder } from 'common/@interfaces/folders';

export const eject = async (): Promise<EjectFolder> => {
  const foldersEntitySerialized = window.localStorage.getItem(
    entityTypes.FOLDERS
  ) as string;
  const result = await JSON.parse(foldersEntitySerialized);

  return result;
};

export const inject = async ({ meta, list }: EjectFolder): Promise<void> => {
  const newEntitySerialized = JSON.stringify({
    meta,
    list,
  });

  await window.localStorage.setItem(entityTypes.FOLDERS, newEntitySerialized);
};

export const findById = async ({
  id,
}: {
  id: number;
}): Promise<Folder | undefined> => {
  const { list } = await eject();
  const result = await list.find(item => Number(item.id) === Number(id));

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

  if (hasRemoveItem) {
    await inject({
      meta,
      list: newList,
    });
  }

  return Promise.resolve(hasRemoveItem);
};
