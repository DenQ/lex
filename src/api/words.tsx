import { fieldNames } from 'app/words/form/constants';
import entityTypes from 'common/@types/entity';


export const eject = async () => {
    const entitySerialized = String(window.localStorage.getItem(entityTypes.WORDS));
    const entity = JSON.parse(entitySerialized);
    return await entity;
};

type TypeMetaList = {
    meta: any,
    list: Array<any>,
};

type TypeIdPayload = {
    payload: any,
    id: number,
};

type TypeId = {
    id: number,
};

type TypeFolder = {
    folder_id: number,
};

export type TypeCriteria = {
    // criteria: () => boolean
    criteria: Function,
}

export const inject = async ({ meta, list }: TypeMetaList) => {
    const newEntitySerialized = JSON.stringify({
        meta, list,
    });

    await window.localStorage.setItem(entityTypes.WORDS, newEntitySerialized);
};

export const findById = async ({ id }: TypeId) => {
    const { list } = await eject();
    return await list.find((item: TypeId) => Number(item.id) === Number(id));
};

export const findAll = async ({ criteria = () => true }) => {
    const { list } = await eject();
    return await list.filter(criteria);
};

export const count = async ({ criteria: () => true }): Promise:void => {
    const list = await findAll({ criteria });
    return list.length;
};

export const removeById = async ({ id }: TypeId) => {
    const { list, meta } = await eject();
    const newList = list.filter((item: TypeId) => item.id !== id);

    return await inject({
        meta,
        list: newList,
    });
};

export const removeByFolderId = async ({ folderId }: { folderId: string}) => {
    const { list, meta } = await eject();
    const newList = list.filter((item: TypeFolder) => Number(item.folder_id) !== Number(folderId));

    return await inject({
        meta,
        list: newList,
    });
};

export const updateById = async ({ id, payload }: TypeIdPayload) => {
    const { list, meta } = await eject();
    const word = await findById({ id });

    if (!word) return null;
    // TODO: need exclude ID. Via _.omit(...)
    const newWord = {
        ...word,
        ...payload,
    };
    const newList = list.map((item: TypeIdPayload) => {
        // if (item[fieldNames.ID] === id) return newWord;
        if (item.id === id) return newWord;
        return item;
    });

    return await inject({
        meta,
        list: newList,
    });
}