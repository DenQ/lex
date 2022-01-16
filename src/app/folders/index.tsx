import React from 'react';
import Grid from '@material-ui/core/Grid';

import SimpleConfirmation from 'lib/modals/SimpleConfirmation';
import GeneralLayout from 'app/system/layout';
import Text from 'lib/text';

import useRemoveFolder from './@common/hooks/removeFolder';
import useFetchFolders from './@common/hooks/fetchFolders';
import ActionBarFolders from './@common/components/ActionBar';
import TableView from './TableView';

const ListFoldersPage: React.FC = () => {
  const { fetch, list, loading, noData } = useFetchFolders();
  const { confirmYes, confirmNo, removeCandidate, setRemoveCandidate } = useRemoveFolder({
    afterSuccessHandler: fetch,
  });

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
          {!noData && (
            <TableView
              list={list}
              loading={loading}
              removeHandler={setRemoveCandidate}
            />
          )}
        </Grid>
      </Grid>
      <SimpleConfirmation
        title="Attention!"
        message="Do you really want to delete this folder"
        isShow={!!removeCandidate}
        onYes={confirmYes}
        onNo={confirmNo}
      />
    </GeneralLayout>
  );
};

export default ListFoldersPage;
