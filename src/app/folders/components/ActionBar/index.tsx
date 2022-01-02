import React from 'react';
import { Box, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import urlManager from 'common/utils/url-manager';

const BoxActionRight = styled(Grid)(({ theme }) => ({
  textAlign: 'right'
}));

const BarFolders: React.FC = () => {
  const history = useHistory();
  const addHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const url = urlManager.folder().add();

    history.push(url);
  };

  return (
    <Box
      sx={{
        border: '1px solid rgb(224, 224, 224)',
        borderRadius: '3px',
        padding: '5px',
      }}
    >
      <Grid container>
        <Grid item xs={11}>
          {/*  here will be search a field */}
        </Grid>
        <BoxActionRight item xs={1}>
          <Button
            onClick={addHandler}
            color="primary"
            variant="contained"
            size="small"
          >
            Add
          </Button>
        </BoxActionRight>
      </Grid>
    </Box>
  );
};

export default BarFolders;
