import { Folder } from 'common/@interfaces/folders';
import urlManager from 'common/utils/url-manager';
import { ActionName } from '../../@types/list';

const getUrl = (actionName: ActionName, row: Folder): string => {
  if (actionName === ActionName.play) {
    return urlManager.folder().play(row.id);
  }
  return urlManager.folder().edit(row.id);
};

export default getUrl;
