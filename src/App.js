import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import RefreshContext from 'common/contexts/refetch-context';

import { urls } from './common/utils/url-manager';
import ListFolders from './app/folders';
import ShowFolder from './app/folder/show';
import EditFolder from './app/folder/edit';
import AddFolder from './app/folder/add';
import PlayFolder from './app/folder/play';

const theme = createMuiTheme({});

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
		<ThemeProvider theme={theme}>
			<RefreshContext.Provider value={refreshContextValue}>
				<Router>
					<Switch>
						<Route path={urls.FOLDER_SHOW} component={ShowFolder} />
						<Route path={urls.FOLDER_ADD} component={AddFolder} />
						<Route path={urls.FOLDER_EDIT} component={EditFolder} />
						<Route path={urls.FOLDER_PLAY} component={PlayFolder} />
						<Route path={urls.FOLDERS} component={ListFolders} />
						<Route path="/" component={ListFolders} />
					</Switch>
				</Router>
			</RefreshContext.Provider>
		</ThemeProvider>
	);
}

export default App;
