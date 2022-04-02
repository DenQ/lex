import { useEffect, useState } from 'react';

import { findAll } from 'api/words';
import { Filter } from 'common/@types/general';
import { Word, WordFields } from 'common/@interfaces/words';
import { SettingsFields } from 'common/@interfaces/settings';
import { calculateProgress } from 'common/utils/folder/folder-progress';
import { useSettings } from 'common/contexts/settings';

import getWeakestWord from '../utils/getWeakestWord';
import getRange from '../utils/getRange';

type Input = {
  id: number;
  needReload: number | null;
};

type Output = {
  list: Word[];
  targetWord: Word | null;
  vector: boolean;
  progress: number;
  noData: boolean;
};

// TODO: Need useReducer
const useFetchList = ({ id, needReload }: Input): Output => {
  const [list, setList] = useState<Word[]>([]);
  const [targetWord, setTargetWord] = useState<Word | null>(null);
  const [vector, setVector] = useState(true);
  const [progress, setProgress] = useState(0);
  const [noData, setNoData] = useState(false);
  const { settings } = useSettings();

  useEffect(() => {
    const criteria: Filter<Word> = (item: Word): boolean =>
      item[WordFields.FolderId] === id;

    findAll({ criteria }).then(list => {
      const targetWord = getWeakestWord({ list });
      const newList = getRange({
        list,
        limit: settings[SettingsFields.PlayCountWords] as number,
      });
      const progress = calculateProgress({
        list,
        maxCountWins: settings[SettingsFields.PlayMaxCountWins] as number,
      });

      if (list.length === 0) {
        setNoData(true);
      }

      setList(newList);
      targetWord && setTargetWord(targetWord);
      setVector(Math.random() >= 0.5);
      setProgress(progress);
    });
  }, [id, needReload, settings]);

  return {
    list,
    targetWord,
    vector,
    progress,
    noData,
  };
};

export default useFetchList;
