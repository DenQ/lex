import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RefreshContext from 'common/contexts/refetch-context';
import { urls } from 'common/utils/url-manager';
import { SettingsProvider } from 'common/context-providers/settings';

import ListFolders from 'app/folders';
import PingPage from 'app/ping';
import ShowFolder from './app/folder/show';
import EditFolder from './app/folder/edit';
import AddFolder from './app/folder/add';
import PlayFolder from './app/folder/play';
import SettingsPage from './app/settings';

function App() {
  const [wordsReload, setWordsReload] = React.useState(0);
  const [foldersReload, setFoldersReload] = React.useState(0);

  const refreshContextValue = {
    wordsReload,
    setWordsReload,
    foldersReload,
    setFoldersReload,
  };

  return (
    <RefreshContext.Provider value={refreshContextValue}>
      <SettingsProvider>
        <Router>
          <Switch>
            <Route path={urls.FOLDER_SHOW} component={ShowFolder} />
            <Route path={urls.FOLDER_ADD} component={AddFolder} />
            <Route path={urls.FOLDER_EDIT} component={EditFolder} />
            <Route path={urls.FOLDER_PLAY} component={PlayFolder} />
            <Route path={urls.FOLDERS} component={ListFolders} />
            <Route path={urls.SETTINGS} component={SettingsPage} />
            <Route path={urls.PING} component={PingPage} />
            <Route path="/" component={ListFolders} />
          </Switch>
        </Router>
      </SettingsProvider>
    </RefreshContext.Provider>
  );
}

export default App;
