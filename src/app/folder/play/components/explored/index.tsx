import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Text from 'lib/text';

import { RestartFolderHandler } from '../../types';

type Props = {
  restartFolderHandler: RestartFolderHandler;
};

const PlayExplored: React.FC<Props> = ({ restartFolderHandler }) => (
  <Box m={2}>
    <Text color="primary" variant="h5" align="center">
      This folder explored
    </Text>
    <Text color="textSecondary" align="center" paragraph>
      You can restart this folder
    </Text>
    <Grid container justifyContent="center">
      <Grid item>
        <Button color="secondary" size="small" onClick={restartFolderHandler}>
          Restart
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default PlayExplored;
