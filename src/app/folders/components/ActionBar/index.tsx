import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';

import urlManager from 'common/utils/url-manager';
import Text from 'lib/text';

const ItemActionRight = styled(Grid)(({ theme }) => ({
  textAlign: 'right',
}));

const ItemTextRight = styled(Grid)(({ theme }) => ({
  paddingLeft: '10px',
}));

const BarFolders: React.FC = () => {
  const history = useHistory();

  /* eslint-disable react-hooks/exhaustive-deps */
  const addHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const url = urlManager.folder().add();

      history.push(url);
    },
    []
  );
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <Box
      sx={{
        border: '1px solid rgb(224, 224, 224)',
        borderRadius: '3px',
        padding: '5px',
      }}
    >
      <Grid container>
        <ItemTextRight item xs={11}>
          <Text variant="subtitle1">List folders</Text>
        </ItemTextRight>
        <ItemActionRight item xs={1}>
          <Button
            onClick={addHandler}
            color="primary"
            variant="contained"
            size="small"
          >
            Add
          </Button>
        </ItemActionRight>
      </Grid>
    </Box>
  );
};

export default BarFolders;
