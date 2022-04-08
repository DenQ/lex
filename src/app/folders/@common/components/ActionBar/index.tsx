import React from 'react';
import Button from '@mui/material/Button';

import ActionBar from 'lib/ActionBar';

import useAddEventHandler from '../../hooks/addEventHandler';

const ActionBarFolders: React.FC = () => {
  const addEventHandler = useAddEventHandler();

  return (
    <ActionBar
      title="List Folders"
      rightControls={[
        <Button
          key="add-event-handler"
          onClick={addEventHandler}
          color="primary"
          variant="contained"
          size="small"
        >
          Add Folder
        </Button>,
      ]}
    />
  );
};

export default ActionBarFolders;
