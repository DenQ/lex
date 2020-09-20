import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Button from '@material-ui/core/Button'

import { findAll } from 'api/folders';
import urlManager from 'common/utils/url-manager';
import GeneralLayout from 'app/system/layout';


const Component = (props) => {
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

  const onClickCreateNew = () => {
    const { history } = props;
    history.push(urlManager.folder().add());
  };

  const addFolder = (
    <Button
      variant="contained"
      color="primary"
      onClick={onClickCreateNew}
      size="small"
      href={urlManager.folder().add()}
    >
      Create New *
    </Button>
  );

  return (
    <GeneralLayout title="Folders" isHome>
      {addFolder}
      {$list}
    </GeneralLayout>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
