import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Form from '../form';
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
      <Form initialValues={initialValues} />
    </Layout>
  )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
