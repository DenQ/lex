import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Layout from '../components/layout';
import urlManager from '../../../common/utils/url-manager';

const Component = (props) => {
  const {
    match: {
      params: {
        id,
      },
    },
  } = props;

  return (
    <Layout title="Details Folder">
      <Link to={urlManager.folder().edit(id)}>To Edit</Link>
      <div>Concrete Folder</div>
    </Layout>
  )
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
