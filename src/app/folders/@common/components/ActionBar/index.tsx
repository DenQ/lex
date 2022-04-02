import React from 'react';
import { Box, Grid } from '@mui/material';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';

import Text from 'lib/text';
import useAddEventHandler from '../../hooks/addEventHandler';

const ItemActionRight = styled(Grid)(({ theme }) => ({
  textAlign: 'right',
}));

const ItemTextRight = styled(Grid)(({ theme }) => ({
  paddingLeft: '10px',
}));

const BarFolders: React.FC = () => {
  const addEventHandler = useAddEventHandler();

  return (
    <Box
      sx={{
        border: '1px solid rgb(224, 224, 224)',
        borderRadius: '3px',
        padding: '5px',
      }}
    >
      <Grid container>
        <ItemTextRight item xs={10}>
          <Text variant="subtitle1">List folders</Text>
        </ItemTextRight>
        <ItemActionRight item xs={2}>
          <Button
            onClick={addEventHandler}
            color="primary"
            variant="contained"
            size="small"
          >
            Add Folder
          </Button>
        </ItemActionRight>
      </Grid>
    </Box>
  );
};

export default BarFolders;
