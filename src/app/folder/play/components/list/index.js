import React from 'react';
// import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

import { fieldNames as wordFieldNames } from 'app/words/form/constants';


const Component = ({
    targetWord,
    list,
    handleSelectWord,
    vector,
}) => {
    const onSelectWord = (selectedWord) => () => {
        handleSelectWord({
            targetWord,
            selectedWord,
        });
    };
    const getTitle = (item, vector) => {
        return item[
            vector ? wordFieldNames.WORD_TRANSLATION : wordFieldNames.WORD_NATIVE
        ];
    };
    const targetTitle = React.useMemo(() => {
        return getTitle(targetWord, !vector);
    }, [vector, targetWord]);

    return (
        <List>
            <ListItem button key={targetWord[wordFieldNames.ID]}>
                <Typography>{targetTitle}</Typography>
            </ListItem>
            {list.map((item) => {
                return (
                    <ListItem button key={item.id} onClick={onSelectWord(item)}>
                        <Typography>
                            {getTitle(item, vector)}
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
