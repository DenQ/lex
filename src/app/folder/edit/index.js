import React from 'react';
// import PropTypes from 'prop-types';

import WordsList from 'app/words/list';

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
    <Layout title="Edit Folder">
      <FolderForm initialValues={initialValues} />
      <WordsList folderId={entity.id} />
    </Layout>
  )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
