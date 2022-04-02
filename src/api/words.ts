import entityTypes from 'common/@types/entity';
import { EjectWord, Word, WordFields } from '../common/@interfaces/words';
import { Filter } from '../common/@types/general';

export const eject = async (): Promise<EjectWord> => {
  let result;

  try {
    const entitySerialized = window.localStorage.getItem(
      entityTypes.WORDS
    ) as string;

    result = await JSON.parse(entitySerialized);
  } catch (e) {
    console.error(e);
  }

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
  let result;

  try {
    const { list } = await eject();

    result = await list.find(item => Number(item.id) === Number(id));
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const findAll = async ({ criteria = () => true }: { criteria: Filter<Word> }): Promise<Word[]> => {
  const { list } = await eject();

  return list.filter(criteria);
};

export const count = async ({ criteria = () => true }: { criteria: Filter<Word> }): Promise<number> => {
  const list = await findAll({ criteria });

  return list.length;
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

export const removeByFolderId = async ({
  folderId,
}: {
  folderId: number;
}): Promise<boolean> => {
  const { list, meta } = await eject();
  const newList = list.filter(item => item.folder_id !== folderId);
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

  try {
    const newList = list.map(item => {
      if (item[WordFields.Id] === id) return newWord;

      return item;
    });

    await inject({
      meta,
      list: newList,
    });
  } catch (e) {
    console.error(e);
  }

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

  try {
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
  } catch (e) {
    console.error(e);
  }

  return counterUpdated;
};
