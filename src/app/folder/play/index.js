import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import { findAll, updateByFolderId } from 'api/words';
import GeneralLayout from 'app/system/layout';
import { fieldNames as wordFieldNames } from 'common/@types/words';
import NoData from 'common/components/no-data';
import { useSettings } from 'common/contexts/settings';
import { calculateProgress } from 'common/utils/folder/folder-progress';
import { fieldNames as settingsFieldNames } from 'common/@types/settings';

import PlayExplored from './components/explored';
import PlayListWords from './components/list';
import Progress from './components/statistic-info';
import Header from '../components/header';
import Layout from '../components/layout';
import { useFindById } from '../utils';
import getRange from './utils/getRange';
import setRate from './utils/setRate';
import getWeakestWord from './utils/getWeakestWord';
import buildBreadCrumbsProps from './utils/buildBreadCrumbsProps';
import { fieldNames, noDataProps } from './constants';

const Component = props => {
  const { entity, id } = useFindById(props);
  const [list, setList] = useState([]);
  const [targetWord, setTargetWord] = useState(null);
  const [vector, setVector] = useState(true);
  const [needReload, setNeedReload] = useState(null);
  const [errorItem, setErrorItem] = useState(null);
  const [progress, setProgress] = useState(0);
  const [noData, setNoData] = useState(false);
  const { settings } = useSettings();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const criteria = item => item[fieldNames.FOLDER_ID] === id;
    findAll({ criteria }).then(list => {
      const targetWord = getWeakestWord({ list });
      const newList = getRange({
        list,
        targetWord,
        limit: settings[settingsFieldNames.PLAY_COUNT_WORDS],
      });
      const progress = calculateProgress({
        list,
        maxCountWins: settings[settingsFieldNames.PLAY_MAX_COUNT_WINS],
      });

      if (list.length === 0) {
        setNoData(true);
      }

      setList(newList);
      setTargetWord(targetWord);
      setVector(Math.random() >= 0.5);
      setProgress(progress);
    });
  }, [
    needReload,
    settings[settingsFieldNames.PLAY_COUNT_WORDS],
    settings[settingsFieldNames.PLAY_MAX_COUNT_WINS],
  ]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const handleSelectWord = ({ targetWord, selectedWord }) => {
    const isSuccess =
      targetWord[wordFieldNames.ID] === selectedWord[wordFieldNames.ID];
    setRate({
      targetWord,
      isSuccess,
    })
      .then(r => {
        if (!isSuccess) {
          setErrorItem(selectedWord);
        }
        setTimeout(() => {
          setNeedReload(+new Date());
          setErrorItem(null);
        }, 300);
      })
      .catch(e => {
        console.error(e);
      });
  };

  const restartFolderHandler = () => {
    const payload = {
      [wordFieldNames.NUMBER_OF_ATTEMPTS]: 0,
      [wordFieldNames.NUMBER_OF_WINS]: 0,
    };
    updateByFolderId({ folderId: id, payload })
      .then(() => {
        setNeedReload(+new Date());
      })
      .catch(e => {
        console.error(e);
      });
  };

  if (!entity || !targetWord) {
    if (!noData) return 'Loading';
  }

  const breadcrumbsProps = buildBreadCrumbsProps({
    folderId: id,
    folderName: entity.name,
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
                targetWord={targetWord}
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

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
