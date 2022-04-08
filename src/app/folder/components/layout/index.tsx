import Grid from '@mui/material/Grid';
import React from 'react';

const Layout: React.FC = props => (
  <Grid container justifyContent="center" spacing={2}>
    <Grid item xs={11}>
      {props.children}
    </Grid>
  </Grid>
);

export default Layout;
