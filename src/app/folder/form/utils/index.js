import { eject as ejectFolders, inject as injectFolders } from 'api/folders';
import { fieldNames } from 'common/@types/folder';

export const submitHandler =
  ({ onSuccessSubmit }) =>
  async values => {
    const { list, meta } = await ejectFolders();
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

    await injectFolders({
      meta,
      list,
    });

    await onSuccessSubmit();
  };
