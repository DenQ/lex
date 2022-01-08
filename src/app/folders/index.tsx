import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import SimpleConfirmation from 'lib/modals/SimpleConfirmation';
import Text from 'lib/text';
import { removeById } from 'api/folders';
import { removeByFolderId } from 'api/words';

import GeneralLayout from '../system/layout';
import useFetchFolders from './@common/hooks/fetchFolders';
import ActionBarFolders from './@common/components/ActionBar';
import TableView from './TableView';
import { Folder } from '../../common/@interfaces/folders';

const ListFoldersPage: React.FC = () => {
  const { fetch, list, loading, noData } = useFetchFolders();
  const [removeCandidate, setRemoveCandidate] = useState<Folder | null>(null);

  const confirmYes = async () => {
    if (!removeCandidate) return Promise.resolve();

    try {
      const { id } = removeCandidate;

      return await removeById({ id })
        .then(r => removeByFolderId({ folderId: id }))
        .then(() => {
          setRemoveCandidate(null);
          fetch();
        });
    } catch (error) {
      // TODO: Here need show notify
      console.log(12, error);
    } finally {
      // TODO: Here need show notify
    }
    return Promise.resolve();
  };
  const confirmNo = () =>
    Promise.resolve().then(() => {
      setRemoveCandidate(null);
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
