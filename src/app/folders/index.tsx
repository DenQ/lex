import React from 'react';
import Grid from '@material-ui/core/Grid';
import GeneralLayout from '../system/layout';
import useFetchFolders from './hooks/fetchFolders';
import TableFolders from './components/list';

type Props = {};

const ListFolders: React.FC<Props> = () => {
	const { list, loading } = useFetchFolders();
	console.log(2222, list, loading);

	return (
		<>
		<GeneralLayout title="Folders" isHome>
			<Grid container justify="center" spacing={2}>
				<TableFolders list={list} />
			</Grid>
		</GeneralLayout>
	</>
	);
}

export default ListFolders;
