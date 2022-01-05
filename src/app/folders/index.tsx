import React from 'react';
import Grid from '@material-ui/core/Grid';

import Text from 'lib/text';
import GeneralLayout from '../system/layout';
import useFetchFolders from './hooks/fetchFolders';
import TableFolders from './components/list';
import ActionBarFolders from './components/ActionBar';

type Props = {};

const ListFolders: React.FC<Props> = () => {
  const { list, loading, noData } = useFetchFolders();

  return (
    <GeneralLayout title="Folders" isHome>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={11}>
          <ActionBarFolders />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={11}>
          {noData && (
            <Text textAlign="center" variant="h6">
              There are no folders yet
            </Text>
          )}
          {!noData && <TableFolders list={list} loading={loading} />}
        </Grid>
      </Grid>
    </GeneralLayout>
  );
};

export default ListFolders;
