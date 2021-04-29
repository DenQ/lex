import React from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { findAll } from 'api/folders';
import urlManager from 'common/utils/url-manager';
import GeneralLayout from 'app/system/layout';

import FolderCard from './components/card';
import FolderCardNew from './components/card-new';

const Component = props => {
	const [list, setList] = React.useState([]);

	React.useEffect(() => {
		findAll().then(results => {
			setList(results);
		});
	}, []);

	const $list = list.map(item => {
		const to = urlManager.folder().show(item.id);
		const toPlay = urlManager.folder().play(item.id);
		return (
			<Grid key={item.id} item>
				<FolderCard data={item} to={to} toPlay={toPlay} history={props.history} />
			</Grid>
		);
	});

	const toAddFolder = urlManager.folder().add();
	const $newFolder = (
		<Grid key="new-folder" item>
			<FolderCardNew to={toAddFolder} history={props.history} />
		</Grid>
	);

	return (
		<GeneralLayout title="Folders" isHome>
			<Grid container justify="center" spacing={2}>
				{$newFolder}
				{$list}
			</Grid>
		</GeneralLayout>
	);
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
