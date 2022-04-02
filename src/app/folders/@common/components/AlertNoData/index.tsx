import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

import Text from 'lib/text';
import useAddEventHandler from '../../hooks/addEventHandler';

import styles from './AlertNoData.module.scss';

const AlertNoData: React.FC = () => {
  const addEventHandler = useAddEventHandler();

  return (
    <Alert severity="info" className={styles.component}>
      <AlertTitle>
        <b>There are no folders yet.</b>
      </AlertTitle>
      <Text>
        You can{' '}
        <i className={styles.link} onClick={addEventHandler} aria-hidden="true">
          create a new folder
        </i>{' '}
        and then fill it with new words to learn.
      </Text>
    </Alert>
  );
};

export default AlertNoData;
