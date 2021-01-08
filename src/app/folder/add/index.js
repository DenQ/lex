import React from 'react';
// import PropTypes from 'prop-types';

import GeneralLayout from 'app/system/layout';

import Header from '../components/header';
import Layout from '../components/layout';
import Form from '../form';
import { buildBreadCrumbsProps } from '../utils';

const Component = () => {
  const breadcrumbsProps = buildBreadCrumbsProps({
      // folderName: '',
      actionName: 'Add',
  });

  return (
    <GeneralLayout title="Add Folder">
      <Layout>
        <Header
            controls={[]}
            breadcrumbsProps={breadcrumbsProps}
        />
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
