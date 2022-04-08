import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { Word } from 'common/@interfaces/words';
import GeneralLayout from 'app/system/layout';
import NoData from 'common/components/no-data';

import PlayExplored from './components/explored';
import PlayListWords from './components/list';
import Progress from './components/statistic-info';
import Layout from '../components/layout';
import { useFindById } from '../utils';
import { noDataProps } from './constants';
import useRestartFolder from './hooks/restartFolderHandler';
import useSelectWordHandler from './hooks/selectWordHandler';
import useFetchList from './hooks/fetchList';
import HeaderPlayFolder from './components/header';

type Props = RouteComponentProps & {};

const PlayPage: React.FC<Props> = ({ match }) => {
  const { entity, id } = useFindById({ match });
  const [needReload, setNeedReload] = useState<number | null>(null);
  const [errorItem, setErrorItem] = useState<Word | null>(null);
  const { list, targetWord, vector, progress, noData } = useFetchList({
    id,
    needReload,
  });

  const restartFolderHandler = useRestartFolder({ id, setNeedReload });

  const handleSelectWord = useSelectWordHandler({
    setErrorItem,
    setNeedReload,
  });

  if (!entity || !targetWord) {
    if (!noData) return <>Loading</>;
  }

  return (
    <GeneralLayout title="Play Folder">
      <Layout>
        <HeaderPlayFolder name={entity?.name || ''} />
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
