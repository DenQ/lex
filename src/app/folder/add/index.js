import React from 'react';
import Box from '@mui/material/Box';

import GeneralLayout from 'app/system/layout';
import BreadCrumbs from 'common/components/bread-crumbs';
import Layout from '../components/layout';
import Form from '../form';
import { buildBreadCrumbsProps } from '../utils';

const AddFolderPage = () => {
  const breadcrumbs = buildBreadCrumbsProps({
    actionName: 'Add',
  });

  return (
    <GeneralLayout title="Add Folder">
      <Layout>
        <Box m={2}>
          <BreadCrumbs data={breadcrumbs} />
        </Box>
        <Form />
      </Layout>
    </GeneralLayout>
  );
};

AddFolderPage.propTypes = {};

AddFolderPage.defaultProps = {};

export default AddFolderPage;
