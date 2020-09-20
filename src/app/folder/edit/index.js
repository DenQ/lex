import React from 'react';
// import PropTypes from 'prop-types';

import WordsList from 'app/words/list';
import GeneralLayout from 'app/system/layout';

import Layout from '../components/layout';
import FolderForm from '../form';
import { useFindById } from '../utils';

const Component = (props) => {
  const { entity } = useFindById(props);

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  }

  return (
    <GeneralLayout title="Edit Folder">
      <Layout>
        <FolderForm initialValues={initialValues} />
        <WordsList folderId={entity.id} />
      </Layout>
    </GeneralLayout>
  )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
