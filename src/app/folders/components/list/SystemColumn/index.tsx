import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Folder } from 'common/@interfaces/folders';
import urlManager from 'common/utils/url-manager';
import { ActionName } from '../../../@types/list';

type Props = {
  row: Folder;
};

const getUrl = (actionName: ActionName, row: Folder) => {
  if (actionName === 'play') {
    return urlManager.folder().play(row.id);
  }
  return urlManager.folder().edit(row.id);
};

const SystemColumn: React.FC<Props> = ({ row }) => {
  const history = useHistory();
  const handleClickAction = (actionName: ActionName) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const url = getUrl(actionName, row);

    history.push(url);
  };

  return (
    <>
      <Button onClick={handleClickAction(ActionName.edit)} variant="text">
        Edit
      </Button>
      <Button onClick={handleClickAction(ActionName.play)} variant="text">
        Play
      </Button>
    </>
  );
};

export default SystemColumn;
