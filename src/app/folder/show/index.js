import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import urlManager from 'common/utils/url-manager';

import Layout from '../components/layout';
import Form from '../form';
import { useFindById } from '../utils';


const Component = (props) => {
  const { entity, id } = useFindById(props);

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  }

  return (
    <Layout title="Details Folder">
      <Link to={urlManager.folder().edit(id)}>To Edit</Link>
      <Form initialValues={initialValues} readOnly />
    </Layout>
  )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
