import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

// import WordsList from 'app/words/list';
import { findAll } from 'api/words';
import GeneralLayout from 'app/system/layout';
import Header from '../components/header';

import Layout from '../components/layout';
// import FolderForm from '../form';
import { useFindById } from '../utils';
import { getRange, getWeakestWord } from './utils';
import { fieldNames } from './constants';

const Component = (props) => {
    const { entity, id } = useFindById(props);
    const [list, setList] = useState([]);

    useEffect(() => {
        const criteria = item => item[fieldNames.FOLDER_ID] === id;
        findAll({ criteria })
            .then((list) => {
                const targetWord = getWeakestWord({ list });
                const newList = getRange({ list, targetWord });
                setList(newList);
            });
    }, []);

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
                    <List>
                        {list.map((item) => {
                            return (
                                <ListItem button key={item.id}>
                                    <Typography>
                                        {item.word_native}
                                    </Typography>
                                </ListItem>
                            );
                        })}
                    </List>
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