import entityTypes from 'common/@types/entity';


export const eject = async () => {
    const foldersEntitySerialized = window.localStorage.getItem(entityTypes.FOLDERS);
    const foldersEntity = JSON.parse(foldersEntitySerialized);
    return await foldersEntity;
};

export const inject = async ({ meta, list }) => {
    const newEntitySerialized = JSON.stringify({
        meta, list,
    });

    await window.localStorage.setItem(entityTypes.FOLDERS, newEntitySerialized);
};

export const findById = async ({ id }) => {
    const { list } = await eject();
    return await list.find((item) => Number(item.id) === Number(id));
};

export const findAll = async () => {
    const { list } = await eject();
    return await list;
};

export const removeById = async ({ id }) => {
    const { list, meta } = await eject();
    const newList = list.filter((item) => item.id !== id);

    return await inject({
        meta,
        list: newList,
    });
};
