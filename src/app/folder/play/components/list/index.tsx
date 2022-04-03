import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Word, WordFields } from 'common/@interfaces/words';
import Text from 'lib/text';
import { SelectWordHandler } from '../../types';

import styles from './ListPlay.module.scss';

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
    <List className={styles.component}>
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
              className={isError ? 'item-error' : undefined}
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
