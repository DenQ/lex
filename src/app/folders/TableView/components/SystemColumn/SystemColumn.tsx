import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Folder } from 'common/@interfaces/folders';
import getUrl from 'app/folders/@common/utils/getUrl';
import ButtonViewSystemColumn from './ButtonViewSystemColumn';
import { ActionName, RemoveHandler } from '../../../@types/list';

type Props = {
  row: Folder;
  removeHandler: RemoveHandler;
};

const SystemColumn: React.FC<Props> = ({ row, removeHandler }) => {
  const history = useHistory();

  const handleClickAction = useCallback(
    (actionName: ActionName) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (actionName === ActionName.remove) {
        removeHandler(row);
      } else {
        const url = getUrl(actionName, row);

        history.push(url);
      }
    },
    [history, row, removeHandler]
  );

  const handleActionPlay = handleClickAction(ActionName.play);
  const handleActionEdit = handleClickAction(ActionName.edit);
  const handleActionRemove = handleClickAction(ActionName.remove);

  return (
    <ButtonViewSystemColumn
        handleActionPlay={handleActionPlay}
        handleActionEdit={handleActionEdit}
        handleActionRemove={handleActionRemove}
    />
  )
};

export default SystemColumn;
