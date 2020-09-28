import React from 'react';
// import PropTypes from 'prop-types';

import GeneralLayout from 'app/system/layout';

import Layout from '../components/layout';
import Header from '../components/header';
import Form from '../form';
import { useFindById } from '../utils';
import { controlNames } from '../constants';

const Component = (props) => {
  const { entity, id } = useFindById(props);

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  };


  return (
    <GeneralLayout title="Details Folder">
      <Layout>
        <Header
          id={id}
          controls={[
            controlNames.TO_EDIT,
            controlNames.TO_REMOVE
          ]}
        />
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
