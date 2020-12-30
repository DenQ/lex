import React from 'react';
// import PropTypes from 'prop-types';

import GeneralLayout from 'app/system/layout';

import Layout from '../components/layout';
import Form from '../form';

const Component = () => {
  return (
    <GeneralLayout title="Add Folder">
      <Layout>
        <Form />
      </Layout>
    </GeneralLayout>
  )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
