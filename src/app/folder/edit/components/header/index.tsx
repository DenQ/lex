import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@material-ui/core/Box';

import { removeById } from 'api/folders';
import { removeByFolderId } from 'api/words';
import { useConfirmationModal } from 'lib/modals/confirmation/hook';
import { ConfirmationModal } from 'lib/modals/confirmation';
import ActionBar from 'lib/ActionBar';
import ButtonCounter from 'lib/buttons/ButtonCounter';
import urlManager from 'common/utils/url-manager';
import BreadCrumbs from 'common/components/bread-crumbs';

import { buildBreadCrumbsProps } from '../../../utils';

type Props = {
  counterWords: number;
  entity: {
    id: number;
    name: string;
  };
};

const HeaderEditFolder: React.FC<Props> = ({
  counterWords,
  entity: { id, name },
}) => {
  const history = useHistory();

  const toRemoveHandler = ({ reset }: { reset: any }) => {
    removeById({ id })
      .then(r => removeByFolderId({ folderId: id }))
      .then(r => {
        reset();
        const to = urlManager.folders();

        history.push(to);
      })
      .catch(e => {
        console.log('Catch error', e);
      });
  };

  const { open, toOpen, onYes, onCancel } = useConfirmationModal({
    onConfirmation: toRemoveHandler,
  });

  const onClickToRemove = () => {
    toOpen();
  };

  const collectionControls = [
    <ButtonCounter variant="outlined" color="info" size="small" key="counter">
      Words:&nbsp;<b>{counterWords}</b>
    </ButtonCounter>,
    <Button
      color="secondary"
      variant="outlined"
      size="small"
      onClick={onClickToRemove}
      key="to-remove"
    >
      Remove
    </Button>,
  ];

  const breadcrumbsProps = buildBreadCrumbsProps({
    folderName: name,
    actionName: 'Edit',
  });

  return (
    <>
      <ActionBar title="Edit Folder" rightControls={collectionControls} />
      <Box m={2}>
        <BreadCrumbs data={breadcrumbsProps} />
      </Box>
      <ConfirmationModal
        open={open}
        title="Remove folder"
        message="Are you sure you want to delete the folder?"
        onYes={onYes}
        onCancel={onCancel}
      />
    </>
  );
};

export default HeaderEditFolder;
