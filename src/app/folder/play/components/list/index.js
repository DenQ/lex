import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import {
  fieldNames as wordFieldNames,
  ModelProps as WordModelProps,
} from 'common/@types/words';
import Text from 'lib/text';

const useStyles = makeStyles({
  errorItem: {
    color: 'red',
  },
});

const Component = ({
  targetWord,
  list,
  handleSelectWord,
  vector,
  errorItem,
}) => {
  const classes = useStyles();
  const onSelectWord = selectedWord => () => {
    handleSelectWord({
      targetWord,
      selectedWord,
    });
  };
  const getTitle = (item, vector) =>
    item[vector ? wordFieldNames.WORD_TRANSLATION : wordFieldNames.WORD_NATIVE];
  const targetTitle = React.useMemo(
    () => getTitle(targetWord, !vector),
    [vector, targetWord]
  );
  const itemVariant = 'button';

  return (
    <List>
      <ListItem button key={targetWord[wordFieldNames.ID]}>
        <Text color="primary" variant={itemVariant}>
          {targetTitle}
        </Text>
      </ListItem>
      {list.map(item => {
        const isError = errorItem
          ? item[wordFieldNames.ID] === errorItem[wordFieldNames.ID]
          : false;
        return (
          <ListItem button key={item.id} onClick={onSelectWord(item)}>
            <Text
              color="textSecondary"
              variant={itemVariant}
              className={isError ? classes.errorItem : undefined}
            >
              {getTitle(item, vector)}
            </Text>
          </ListItem>
        );
      })}
    </List>
  );
};

Component.propTypes = {
  targetWord: WordModelProps.isRequired,
  list: PropTypes.arrayOf(WordModelProps),
  handleSelectWord: PropTypes.func,
  vector: PropTypes.bool.isRequired,
  errorItem: WordModelProps,
};

Component.defaultProps = {
  handleSelectWord: _.noop,
  errorItem: null,
};

export default Component;
