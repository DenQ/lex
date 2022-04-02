import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Word, WordFields } from 'common/@interfaces/words';
import Text from 'lib/text';
import { SelectWordHandler } from '../../types';

const useStyles = makeStyles({
  errorItem: {
    color: 'red',
  },
});

type Props = {
  targetWord: Word;
  list: Word[];
  vector: boolean;
  handleSelectWord: SelectWordHandler;
  errorItem?: Word | null;
};

const PlayList: React.FC<Props> = ({
  targetWord,
  list,
  handleSelectWord,
  vector,
  errorItem,
}) => {
  const classes = useStyles();
  const onSelectWord = (selectedWord: Word) => () => {
    handleSelectWord({
      targetWord,
      selectedWord,
    });
  };
  const getTitle = (item: Word, vector: boolean): string =>
    item[vector ? WordFields.WordTransaction : WordFields.WordNative];

  const targetTitle = React.useMemo(
    () => getTitle(targetWord, !vector),
    [vector, targetWord]
  );
  const itemVariant = 'button';

  return (
    <List>
      <ListItem button key={targetWord[WordFields.Id]}>
        <Text color="primary" variant={itemVariant}>
          {targetTitle}
        </Text>
      </ListItem>
      {list.map(item => {
        const isError = errorItem
          ? item[WordFields.Id] === errorItem[WordFields.Id]
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

PlayList.defaultProps = {
  errorItem: null,
};

export default PlayList;
