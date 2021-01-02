import React from 'react';
// import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

import { fieldNames as wordFieldNames } from 'app/words/form/constants';


const Component = ({
    targetWord,
    list,
}) => {
    return (
        <List>
            <ListItem button key={targetWord[wordFieldNames.ID]}>
                <Typography>
                    {targetWord[wordFieldNames.WORD_TRANSLATION]}
                </Typography>
            </ListItem>
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
);
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
