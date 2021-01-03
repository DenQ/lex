import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import { findAll } from 'api/words';
import GeneralLayout from 'app/system/layout';
import { fieldNames as wordFieldNames } from 'app/words/form/constants';
import PlayListWords from './components/list';

import Header from '../components/header';
import Layout from '../components/layout';
import { useFindById } from '../utils';
import { getRange, getWeakestWord, setRate } from './utils';
import { fieldNames } from './constants';

const Component = (props) => {
    const { entity, id } = useFindById(props);
    const [list, setList] = useState([]);
    const [targetWord, setTargetWord] = useState(null);
    const [vector, setVector] = useState(true);
    const [needReload, setNeedReload] = useState(null);
    const [errorItem, setErrorItem] = useState(null);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const criteria = item => item[fieldNames.FOLDER_ID] === id;
        findAll({ criteria })
            .then((list) => {
                const targetWord = getWeakestWord({ list });
                const newList = getRange({ list, targetWord });

                setList(newList);
                setTargetWord(targetWord);
                setVector(Math.random() >= 0.5);
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
        return 'Loading';
    }

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
                    <PlayListWords
                        list={list}
                        targetWord={targetWord}
                        handleSelectWord={handleSelectWord}
                        vector={vector}
                        errorItem={errorItem}
                    />
                </Box>
            </Layout>
        </GeneralLayout>
    )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
