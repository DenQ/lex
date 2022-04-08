import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@material-ui/core/Box';

import { removeById } from 'api/folders';
import { removeByFolderId } from 'api/words';
import urlManager from 'common/utils/url-manager';
import BreadCrumbs, {
  BreadcrumbsPropTypes,
} from 'common/components/bread-crumbs';
import { useConfirmationModal } from 'lib/modals/confirmation/hook';
import ActionBar from 'lib/ActionBar';

import { ConfirmationModal } from 'lib/modals/confirmation';
import { controlNames } from '../../constants';

// TODO. Need to rewrite
const Component = props => {
  const history = useHistory();
  const { id, controls, breadcrumbsProps } = props;
  const toEditHandler = () => {
    const to = urlManager.folder().edit(id);

    history.push(to);
  };

  const toRemoveHandler = ({ reset }) => {
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

  const collectionControls = [];

  if (controls.includes(controlNames.TO_EDIT)) {
    collectionControls.push(
      <Button
        color="primary"
        onClick={toEditHandler}
        size="small"
        key="to-edit"
      >
        To Edit
      </Button>
    );
  }

  if (controls.includes(controlNames.TO_REMOVE)) {
    collectionControls.push(
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        onClick={onClickToRemove}
        key="to-remove"
      >
        Remove
      </Button>
    );
  }
  const breadcrumbs = breadcrumbsProps && (
    <BreadCrumbs data={breadcrumbsProps} />
  );

  return (
    <>
      <ActionBar title="Edit Folder" rightControls={collectionControls} />
      <Box m={2}>{breadcrumbs}</Box>
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

Component.propTypes = {
  id: PropTypes.number,
  controls: PropTypes.array,
  breadcrumbsProps: BreadcrumbsPropTypes,
};

Component.defaultProps = {
  id: null,
  controls: [],
};

export default Component;
