import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Text from 'lib/text';

const MainBox = styled(Grid)(({ theme }) => ({
  border: '1px solid rgb(224, 224, 224)',
  borderRadius: '3px',
  padding: '5px',
  paddingLeft: '10px'
}));

const ItemActionRight = styled(Box)(({ theme }) => ({
  float: 'right',
  marginLeft: '0.7em',
}));

export type Props = {
  title: string;
  rightControls?: React.ReactNode[];
};

const ActionBar: React.FC<Props> = ({ title, rightControls }) => (
  <MainBox>
    <Grid container spacing={1}>
      <Grid item xs={4} md={2}>
        <Text variant="subtitle1">{title}</Text>
      </Grid>
      {rightControls && (
        <Grid item xs={8} md={10}>
          {rightControls.reverse().map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ItemActionRight component="span" key={index}>
              {item}
            </ItemActionRight>
          ))}
        </Grid>
      )}
    </Grid>
  </MainBox>
);

export default ActionBar;
