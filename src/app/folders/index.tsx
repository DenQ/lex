import React from 'react';
import Grid from '@material-ui/core/Grid';
import GeneralLayout from '../system/layout';
import useFetchFolders from './hooks/fetchFolders';
import TableFolders from './components/list';
import ActionBarFolders from './components/ActionBar';

type Props = {};

const ListFolders: React.FC<Props> = () => {
  const { list, loading } = useFetchFolders();
  console.log(2222, list, loading);

  return (
    <>
      <GeneralLayout title="Folders" isHome>
        <Grid container justify="center" spacing={2}>
					<Grid item xs={11}>
						<ActionBarFolders />
					</Grid>
					<Grid item xs={11}>
						<TableFolders list={list} />
					</Grid>
        </Grid>
      </GeneralLayout>
    </>
  );
};

export default ListFolders;
