import entityTypes from 'common/@types/entity';

import { fieldNames } from '../constants';


export const submitHandler = ({ onSuccessSubmit }) => async (values, form, x) => {
    const foldersEntitySerialized = window.localStorage.getItem(entityTypes.FOLDERS);
    const foldersEntity = JSON.parse(foldersEntitySerialized);
    const { list, meta } = foldersEntity;
    const isNew = !values[fieldNames.ID];

    if (isNew) {
        meta.lastId++;
        list.push({
            ...values,
            id: meta.lastId,
        });
    } else {
        list.forEach((item, index) => {
            if (Number(item.id) === Number(values[fieldNames.ID])) {
                list[index][fieldNames.NAME] = values[fieldNames.NAME];
                list[index][fieldNames.DESCRIPTION] = values[fieldNames.DESCRIPTION];
            }
        });
    }

    const newEntitySerialized = JSON.stringify({
        meta, list,
    });

    window.localStorage.setItem(entityTypes.FOLDERS, newEntitySerialized);

    await onSuccessSubmit();
};

export const findById = async ({ id }) => {
    const foldersEntitySerialized = window.localStorage.getItem(entityTypes.FOLDERS);
    const foldersEntity = JSON.parse(foldersEntitySerialized);
    const { list } = foldersEntity;
    return await list.find((item) => Number(item.id) === Number(id));
};
