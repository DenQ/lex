import React from 'react';

export default React.createContext({
	wordsReload: 0,
	setWordsReload: () => {},

	foldersReload: 0,
	setFoldersReload: () => {},
});
