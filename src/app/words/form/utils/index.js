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
        list.forEach((item, index) => {
            if (Number(item.id) === Number(values[fieldNames.ID])) {
                list[index][fieldNames.WORD_NATIVE] = values[fieldNames.WORD_NATIVE];
                list[index][fieldNames.WORD_TRANSLATION] = values[fieldNames.WORD_TRANSLATION];
            }
        });
    }

    await injectWords({
        meta, list,
    });

    await onSuccessSubmit({ values, form });
};
