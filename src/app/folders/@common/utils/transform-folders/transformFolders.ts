import { findAll as findAllWords } from 'api/words';
import { Word } from 'common/@interfaces/words';
import { Settings } from 'common/@interfaces/settings';
import { Folder } from 'common/@interfaces/folders';
import { Filter } from 'common/@types/general';
import { calculateProgress } from 'common/utils/folder/folder-progress';
import { IKeyValue } from 'common/contexts/settings';

type Options = {
  settings: IKeyValue;
};

const getListWords = async (folderId: number | undefined): Promise<Word[]> => {
  const criteria: Filter<Word> = (item): boolean => item.folder_id === folderId;

  return findAllWords({ criteria });
};

export const transform = async (
  listFolders: Folder[],
  { settings }: Options
): Promise<Folder[]> => {
  const foldersMap = new Map();

  for (let i = 0; i < listFolders.length; i++) {
    const itemFolder = listFolders[i];
    // eslint-disable-next-line no-await-in-loop
    const words = await getListWords(itemFolder.id);
    const progress = calculateProgress({
      list: words,
      maxCountWins: (settings as Settings).play_max_count_wins,
    });

    foldersMap.set(itemFolder.id, {
      progress,
      words
    });
  }

  return listFolders.map(item => ({
    ...item,
    progress: foldersMap.get(item.id).progress || 0,
    words: foldersMap.get(item.id).words || []
  }));
};
