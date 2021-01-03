import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { findAll } from 'api/words';
import GeneralLayout from 'app/system/layout';
// import { fieldNames as wordFieldNames } from 'app/words/form/constants';
import PlayListWords from './components/list';

import Header from '../components/header';
import Layout from '../components/layout';
// import FolderForm from '../form';
import { useFindById } from '../utils';
import { getRange, getWeakestWord } from './utils';
import { fieldNames } from './constants';

const Component = (props) => {
    const { entity, id } = useFindById(props);
    const [list, setList] = useState([]);
    const [targetWord, setTargetWord] = useState([]);
    const [vector, setVector] = useState(true);
    const [needReload, setNeedReload] = useState(null);

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

    const handleSelectWord = ({
        targetWord,
        selectedWord,
    }) => {
        console.log(777, {
            targetWord,
            selectedWord,
        });
        setTimeout(() => {
            setNeedReload(+new Date());
        }, 200);
    };

    if (!entity) {
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
                    <Typography variant="button">
                        Play words
                    </Typography>
                    <PlayListWords
                        list={list}
                        targetWord={targetWord}
                        handleSelectWord={handleSelectWord}
                        vector={vector}
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
