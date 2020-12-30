import entityTypes from 'common/@types/entity';


export const eject = async () => {
    const entitySerialized = window.localStorage.getItem(entityTypes.WORDS);
    const entity = JSON.parse(entitySerialized);
    return await entity;
};

export const inject = async ({ meta, list }) => {
    const newEntitySerialized = JSON.stringify({
        meta, list,
    });

    await window.localStorage.setItem(entityTypes.WORDS, newEntitySerialized);
};

export const findById = async ({ id }) => {
    const { list } = await eject();
    return await list.find((item) => Number(item.id) === Number(id));
};

export const findAll = async ({ criteria = () => true }) => {
    const { list } = await eject();
    return await list.filter(criteria);
};

export const count = async ({ criteria = () => true }) => {
    const list = await findAll({ criteria });
    return list.length;
};