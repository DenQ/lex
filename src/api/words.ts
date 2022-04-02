import entityTypes from 'common/@types/entity';
import { EjectWord, Word, WordFields } from '../common/@interfaces/words';
import { Filter } from '../common/@types/general';

export const eject = async (): Promise<EjectWord> => {
  const entitySerialized = window.localStorage.getItem(
    entityTypes.WORDS
  ) as string;
  const result = await JSON.parse(entitySerialized);

  return result;
};

export const inject = async ({ meta, list }: EjectWord): Promise<void> => {
  const newEntitySerialized = JSON.stringify({
    meta,
    list,
  });

  await window.localStorage.setItem(entityTypes.WORDS, newEntitySerialized);
};

export const findById = async ({
  id,
}: {
  id: number;
}): Promise<Word | undefined> => {
  const { list } = await eject();
  const result = await list.find(item => Number(item.id) === Number(id));

  return result;
};

export const findAll = async ({
  criteria = () => true,
}: {
  criteria: Filter<Word>;
}): Promise<Word[]> => {
  const { list } = await eject();

  return list.filter(criteria);
};

export const count = async ({
  criteria = () => true,
}: {
  criteria: Filter<Word>;
}): Promise<number> => {
  const list = await findAll({ criteria });

  return list.length;
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

export const removeByFolderId = async ({
  folderId,
}: {
  folderId: number;
}): Promise<boolean> => {
  const { list, meta } = await eject();
  const newList = list.filter(item => item.folder_id !== folderId);
  const hasRemoveItem = list.length !== newList.length;

  if (hasRemoveItem) {
    await inject({
      meta,
      list: newList,
    });
  }

  return hasRemoveItem;
};

export const updateById = async ({
  id,
  payload,
}: {
  id: number;
  payload: Partial<Word>;
}): Promise<boolean> => {
  const { list, meta } = await eject();
  const word = await findById({ id });

  if (!word) return false;

  // TODO: need exclude ID. Via _.omit(...)
  const newWord = {
    ...word,
    ...payload,
  };
  const newList = list.map(item => {
    if (item[WordFields.Id] === id) return newWord;

    return item;
  });

  await inject({
    meta,
    list: newList,
  });

  return true;
};

export const updateByFolderId = async ({
  folderId,
  payload,
}: {
  folderId: number;
  payload: Partial<Word>;
}): Promise<number> => {
  const { list, meta } = await eject();
  let counterUpdated = 0;

  const newList = list.map(word => {
    if (word.folder_id === folderId) {
      counterUpdated += 1;

      return {
        ...word,
        ...payload,
      };
    }

    return word;
  });

  if (counterUpdated > 0) {
    await inject({
      meta,
      list: newList,
    });
  }

  return counterUpdated;
};
