import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import { findAll } from 'api/words';
import GeneralLayout from 'app/system/layout';
import { fieldNames as wordFieldNames } from 'common/@types/words';
import NoData from 'common/components/no-data';
import BreadCrumbs from 'common/components/bread-crumbs';

import PlayListWords from './components/list';
import Progress from './components/statistic-info';
import Header from '../components/header';
import Layout from '../components/layout';
import { useFindById } from '../utils';
import { getRange, getWeakestWord, setRate, calculateProgress, buildBreadCrumbsProps } from './utils';
import { fieldNames, noDataProps } from './constants';

const Component = (props) => {
    const { entity, id } = useFindById(props);
    const [list, setList] = useState([]);
    const [targetWord, setTargetWord] = useState(null);
    const [vector, setVector] = useState(true);
    const [needReload, setNeedReload] = useState(null);
    const [errorItem, setErrorItem] = useState(null);
    const [progress, setProgress] = React.useState(0);
    const [noData, setNoData] = React.useState(false);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const criteria = item => item[fieldNames.FOLDER_ID] === id;
        findAll({ criteria })
            .then((list) => {
                const targetWord = getWeakestWord({ list });
                const newList = getRange({ list, targetWord });
                const progress = calculateProgress({ list });

                if (list.length === 0) {
                    setNoData(true);
                }

                setList(newList);
                setTargetWord(targetWord);
                setVector(Math.random() >= 0.5);
                setProgress(progress);
            });
    }, [needReload]);
    /* eslint-enable react-hooks/exhaustive-deps */

    const handleSelectWord = ({
        targetWord,
        selectedWord,
    }) => {
        const isSuccess = targetWord[wordFieldNames.ID] === selectedWord[wordFieldNames.ID];
        setRate({
            targetWord,
            isSuccess,
        }).then((r) => {
            if (!isSuccess) {
                setErrorItem(selectedWord);
            }
            setTimeout(() => {
                setNeedReload(+new Date());
                setErrorItem(null);
            }, 300);
        }).catch((e) => {
            console.error(e);
        })
    };


    if (!entity || !targetWord) {
        if (!noData)
            return 'Loading';
    }

    const breadcrumbsProps = buildBreadCrumbsProps({
        folderId: id,
    });

    return (
        <GeneralLayout title="Play Folder">
            <Layout>
                <Header
                    id={id}
                    controls={[
                        // controlNames.TO_REMOVE
                    ]}
                />
                <Box m={2}>
                    <BreadCrumbs data={breadcrumbsProps} />
                </Box>
                {noData && (
                    <NoData {...noDataProps} />
                )}
                {!noData && (
                    <>
                        <Progress value={progress}/>
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
            </Layout>
        </GeneralLayout>
    )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
