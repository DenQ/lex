import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { findAll } from 'api/words';
import { SettingsFields } from 'common/@interfaces/settings';
import { Word } from 'common/@interfaces/words';
import GeneralLayout from 'app/system/layout';
import NoData from 'common/components/no-data';
import { useSettings } from 'common/contexts/settings';
import { calculateProgress } from 'common/utils/folder/folder-progress';

import PlayExplored from './components/explored';
import PlayListWords from './components/list';
import Progress from './components/statistic-info';
import Header from '../components/header';
import Layout from '../components/layout';
import { useFindById } from '../utils';
import getRange from './utils/getRange';
import getWeakestWord from './utils/getWeakestWord';
import buildBreadCrumbsProps from './utils/buildBreadCrumbsProps';
import { noDataProps } from './constants';
import useRestartFolder from './hooks/restartFolderHandler';
import useSelectWordHandler from './hooks/selectWordHandler';

type Props = RouteComponentProps & {};

const PlayPage: React.FC<Props> = ({ match }) => {
  const { entity, id } = useFindById({ match });
  const [list, setList] = useState<Word[]>([]);
  const [targetWord, setTargetWord] = useState<Word | null>(null);
  const [vector, setVector] = useState(true);
  const [needReload, setNeedReload] = useState<number | null>(null);
  const [errorItem, setErrorItem] = useState<Word | null>(null);
  const [progress, setProgress] = useState(0);
  const [noData, setNoData] = useState(false);
  const { settings } = useSettings();

  useEffect(() => {
    const criteria = (item: Word) => item.folder_id === id;
    // @ts-ignore
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

  const restartFolderHandler = useRestartFolder({ id, setNeedReload });

  const handleSelectWord = useSelectWordHandler({
    setErrorItem,
    setNeedReload,
  });

  if (!entity || !targetWord) {
    if (!noData) return <>Loading</>;
  }

  const breadcrumbsProps = buildBreadCrumbsProps({
    folderId: id,
    folderName: entity?.name || '?',
  });

  return (
    <GeneralLayout title="Play Folder">
      <Layout>
        <Header id={id} breadcrumbsProps={breadcrumbsProps} />
        {noData && <NoData {...noDataProps} />}
        {!noData && progress < 100 && (
          <>
            <Progress value={progress} />
            <Box m={2}>
              <PlayListWords
                list={list}
                targetWord={targetWord!}
                handleSelectWord={handleSelectWord}
                vector={vector}
                errorItem={errorItem}
              />
            </Box>
          </>
        )}
        {!noData && progress >= 100 && (
          <PlayExplored restartFolderHandler={restartFolderHandler} />
        )}
      </Layout>
    </GeneralLayout>
  );
};

export default PlayPage;
