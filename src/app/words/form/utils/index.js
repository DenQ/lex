import {
    eject as ejectWords,
    inject as injectWords,
} from 'api/words';

import { fieldNames } from '../constants';


export const submitHandler = ({ onSuccessSubmit }) => async (values, form) => {
    const { list, meta } = await ejectWords();
    const isNew = !values[fieldNames.ID];

    console.log(3333, values);
    if (isNew) {
        meta.lastId++;
        list.push({
            ...values,
            id: meta.lastId,
        });
    } else {
        // list.forEach((item, index) => {
        //     if (Number(item.id) === Number(values[fieldNames.ID])) {
        //         list[index][fieldNames.NAME] = values[fieldNames.NAME];
        //         list[index][fieldNames.DESCRIPTION] = values[fieldNames.DESCRIPTION];
        //     }
        // });
    }

    await injectWords({
        meta, list,
    });

    await onSuccessSubmit({ values, form });
};
