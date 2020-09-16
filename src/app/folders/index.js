import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import urlManager from '../../common/utils/url-manager';

const fakeData = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

const Component = () => {
  const list = fakeData.map((item) => {
    const to = urlManager.folder().show(item);

    return (
      <div key={item} >
        <Link to={to}>Folder {item}</Link>
      </div>
    );
  });

  const addFolder = (
    <Link to="/folders/add" >Create New *</Link>
  );

  return (
    <>
      <h1>List Folders</h1>
      {addFolder}
      {list}
    </>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
