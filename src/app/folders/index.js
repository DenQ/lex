import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   Link,
// } from 'react-router-dom';
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid';
import { findAll } from 'api/folders';
import urlManager from 'common/utils/url-manager';
import GeneralLayout from 'app/system/layout';

import FolderCard from './components/card';


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
      <Grid key={item.id} item>
        <FolderCard
          data={item}
          to={to}
          history={props.history}
        />
      </Grid>
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
    >
      Create New *
    </Button>
  );

  return (
    <GeneralLayout title="Folders" isHome>
      {addFolder}
      <Grid container justify="center" spacing={2}>
        {$list}
      </Grid>
    </GeneralLayout>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
