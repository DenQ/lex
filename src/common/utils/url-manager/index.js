export const urls = {
    HOME: '/',
    FOLDER: '/folder',
    FOLDERS: '/folders',
    FOLDER_ADD: '/folders/add',
    FOLDER_EDIT: '/folders/:id/edit',
    FOLDER_SHOW: '/folders/:id/show',
};

const replaceUrl = (url, id) => url.replace(':id', id);

export default {
    home: () => urls.HOME,
    folders: () => urls.FOLDERS,
    folder: () => {
        return {
            add: () => urls.FOLDER_ADD,
            show: (id) => replaceUrl(urls.FOLDER_SHOW, id),
            edit: (id) => replaceUrl(urls.FOLDER_EDIT, id),
        }
    },
};