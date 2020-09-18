import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Form from '../form';
import { findById } from '../form/utils';

const Component = (props) => {
  const {
    match: {
      params: {
        id,
      },
    },
  } = props;
  const [entity, setEntity] = React.useState(null);

  React.useEffect(() => {
    findById({ id }).then((modelResult) => {
      console.log(1, modelResult);
      setEntity(modelResult)
    })
  }, [id]);

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
