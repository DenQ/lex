import React, { useContext, useMemo } from 'react';

import ProgressLabel from 'lib/progress/label/ProgressLabel';
import { Folder } from 'common/@interfaces/folders';
import { SettingsContext } from 'common/contexts/settings';
import useGetWordsByFolderId from 'common/hooks/useGetWordsByFolderId';
import { calculateProgress } from 'common/utils/folder/folder-progress';

type Props = {
  row: Folder;
};

const ProgressColumn: React.FC<Props> = ({ row }) => {
  const { loading, list } = useGetWordsByFolderId({ folderId: Number(row.id) });
  const {
    settings: { play_max_count_wins: playMaxCountWins },
  } = useContext(SettingsContext);
  const percentValue = useMemo(
    () =>
      calculateProgress({
        list,
        maxCountWins: Number(playMaxCountWins),
      }),
    [list, playMaxCountWins]
  );

  if (loading) return <>loading...</>;

  return (
    <ProgressLabel
      variant="outlined"
      percentValue={percentValue}
      text={`${Math.round(percentValue)} %`}
    />
  );
};

export default ProgressColumn;
