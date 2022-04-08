import React from 'react';

import GeneralLayout from 'app/system/layout';
import WordsList from 'app/words/list';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout';
import Form from '../form';
import { useFindById } from '../utils';

const Component = ({ match }) => {
  const { entity } = useFindById({ match });

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  };

  return (
    <GeneralLayout title="Details Folder">
      <Layout>
        <Box m={2}>
          <Form initialValues={initialValues} readOnly />
          <WordsList folderId={entity.id} readOnly />
        </Box>
      </Layout>
    </GeneralLayout>
  );
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
