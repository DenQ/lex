import React from 'react';
import Grid from '@material-ui/core/Grid';
import Text from 'lib/text';
import GeneralLayout from '../system/layout';
import useFetchFolders from './@common/hooks/fetchFolders';
import ActionBarFolders from './@common/components/ActionBar';
import TableView from './TableView';


const ListFoldersPage: React.FC = () => {
  const { list, loading, noData } = useFetchFolders();

  return (
    <GeneralLayout title="Folders" isHome>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={11}>
          <ActionBarFolders />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={11}>
          {noData && (
            <Text textAlign="center" variant="h6">
              There are no folders yet
            </Text>
          )}
          {!noData && <TableView list={list} loading={loading} />}
        </Grid>
      </Grid>
    </GeneralLayout>
  );
};

export default ListFoldersPage;
