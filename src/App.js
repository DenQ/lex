import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import { urls } from './common/utils/url-manager';

import ListFolders from './app/folders';
import ShowFolder from './app/folder/show';
import EditFolder from './app/folder/edit';
import AddFolder from './app/folder/add';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path={urls.FOLDER_SHOW} component={ShowFolder} />
        <Route path={urls.FOLDER_ADD} component={AddFolder} />
        <Route path={urls.FOLDER_EDIT} component={EditFolder} />
        <Route path={urls.FOLDERS} component={ListFolders} />
        <Route path="/" component={ListFolders} />
      </Switch>
    </Router>
  );
}

export default App;
