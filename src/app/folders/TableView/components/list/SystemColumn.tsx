import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Folder } from 'common/@interfaces/folders';
import getUrl from 'app/folders/@common/utils/getUrl';
import { ActionName } from '../../../@types/list';

type Props = {
  row: Folder;
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
