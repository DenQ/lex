import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import urlManager from 'common/utils/url-manager';
import GeneralLayout from 'app/system/layout';

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
    <GeneralLayout title="Details Folder">
      <Layout>
        <Link to={urlManager.folder().edit(id)}>To Edit</Link>
        <Form initialValues={initialValues} readOnly />
      </Layout>
    </GeneralLayout>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
