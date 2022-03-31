import { Word, Words } from 'common/@interfaces/words';
import { Folders } from 'common/@interfaces/folders';
import { findAll as findAllWords } from 'api/words';
import { calculateProgress } from 'common/utils/folder/folder-progress';

const getListWords = async (folderId: number | undefined): Promise<Words> => {
	const criteria = (item: Word): boolean => item.folder_id === folderId;

	// @ts-ignore
	return findAllWords({ criteria });
};

export const transform = async (listFolders: Folders): Promise<Folders> => {
	const progressMap = new Map();

	for (let i = 0; i < listFolders.length; i++) {
		const itemFolder = listFolders[i];
		// eslint-disable-next-line no-await-in-loop
		const list = await getListWords(itemFolder.id);
		const progress = calculateProgress({
			list,
			maxCountWins: 2, // TODO: need to get from settings
		});

		progressMap.set(itemFolder.id, progress);
	}

	return listFolders.map(item => ({
		...item,
		progress: progressMap.get(item.id),
	}));
};
