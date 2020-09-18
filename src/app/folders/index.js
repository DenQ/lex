import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import urlManager from 'common/utils/url-manager';
import { findAll } from 'api/folders';


const Component = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    findAll().then((results) => {
      setList(results);
    });
  }, []);

  const $list = list.map((item) => {
    const to = urlManager.folder().show(item.id);

    return (
      <div key={item.id} >
        <Link to={to}>Folder {item.name}</Link>
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
      {$list}
    </>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
