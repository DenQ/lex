import React, { useContext, useMemo } from 'react';
import { Folder } from 'common/@interfaces/folders';
import { SettingsContext } from 'common/contexts/settings';
import useGetWordsByFolderId from 'common/hooks/useGetWordsByFolderId';
import getLearnedWords from 'common/utils/store/get-learned-words/getLearnedWords';

type Props = {
  row: Folder;
};

const ProgressColumn: React.FC<Props> = ({ row }) => {
  const { loading, list } = useGetWordsByFolderId({ folderId: Number(row.id) });
  const {
    settings: { play_max_count_wins: playMaxCountWins },
  } = useContext(SettingsContext);

  const learnedWords = useMemo(
    () =>
      getLearnedWords({
        list,
        countWins: Number(playMaxCountWins),
      }),
    [list, playMaxCountWins]
  );

  if (loading) return <>loading...</>;

  /* TODO: need to show in material component for it */
  return (
    <>
      {learnedWords} / {list.length}
    </>
  );
};

export default ProgressColumn;
