import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import GeneralLayout from '../system/layout';
import SettingsForm from './form';
import { buildBreadCrumbs } from './utils';
import BreadCrumbs from '../../common/components/bread-crumbs';
import Layout from '../folder/components/layout';

type Props = {};

const SettingsPage: React.FC<Props> = () => {
  const breadcrumbs = buildBreadCrumbs();

  return (
    <GeneralLayout title="Settings">
      <Layout>
        <Box m={2}>
          <BreadCrumbs data={breadcrumbs} />
        </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <SettingsForm />
          </Grid>
        </Grid>
      </Layout>
    </GeneralLayout>
  );
};

export default SettingsPage;
