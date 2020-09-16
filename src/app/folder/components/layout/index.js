import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import urlManager from '../../../../common/utils/url-manager';


const Component = (props) => {

  return (
    <>
        <h1>{props.title}</h1>
        <Link to={urlManager.home}>Home</Link>
        {props.children}
    </>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
