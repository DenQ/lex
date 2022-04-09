import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

import Text from 'lib/text';
import { removeById } from 'api/words';

import PresenterWord from '../presenter';

const WordsListPage = ({ folderId, readOnly, list, setNeedRefresh }) => {
  const isShowListHeader = useMemo(
    () => (list.length > 0 && !readOnly) || list.length > 0,
    [readOnly, list.length]
  );
  const handleRemove = ({ id }) => {
    removeById({ id })
      .then(() => {
        setNeedRefresh(+new Date());
      })
      .catch(e => {
        console.log('Error', e);
      });
  };

  return (
    <Box m={2}>
      {isShowListHeader && <Text variant="button">List words</Text>}
      <List>
        {!readOnly && (
          <PresenterWord folderId={folderId} isNew words={list} key="new" />
        )}
        {list.map(item => (
          <PresenterWord
            folderId={folderId}
            data={item}
            key={item.id}
            readOnly={readOnly}
            handleRemove={handleRemove}
            words={list}
          />
        ))}
      </List>
    </Box>
  );
};

WordsListPage.propTypes = {
  folderId: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
  list: PropTypes.array,
  setNeedRefresh: PropTypes.func.isRequired,
};

WordsListPage.defaultProps = {
  readOnly: false,
  list: [],
};

export default WordsListPage;
