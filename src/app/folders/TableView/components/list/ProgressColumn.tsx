import React, { useContext } from 'react';
import { Folder } from 'common/@interfaces/folders';
import { Word, Words } from 'common/@interfaces/words';
import { SettingsContext } from 'common/contexts/settings';
import useGetWordsByFolderId from 'common/hooks/useGetWordsByFolderId';

type Props = {
  row: Folder;
};

// TODO: need to extract utils
const getLearnedWords = ({
  countWins,
  list,
}: {
  countWins: number;
  list: Words;
}): number =>
  list
    .map(({ number_of_wins }: Word) => number_of_wins >= countWins)
    .filter((value: boolean) => value).length;

const ProgressColumn: React.FC<Props> = ({ row }) => {
  const { loading, list } = useGetWordsByFolderId({ folderId: Number(row.id) });
  const { settings } = useContext(SettingsContext);

  if (loading) return <>loading...</>;

  // TODO: need to memoized
  const learnedWords = getLearnedWords({
    list,
    countWins: Number(settings.play_max_count_wins),
  });

  /* TODO: need to show in material component for it */
  return (
    <>
      {learnedWords} / {list.length}
    </>
  );
};

export default ProgressColumn;
