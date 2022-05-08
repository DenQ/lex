import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Folder } from 'common/@interfaces/folders';
import getUrl from 'app/folders/@common/utils/getUrl';

import ButtonViewSystemColumn from './ButtonViewSystemColumn';
import DropdownViewSystemColumn from './DropdowmViewSystemColumn';
import { ActionName, RemoveHandler } from '../../../@types/list';
import { HandlerEvent } from './types';

type Props = {
  row: Folder;
  removeHandler: RemoveHandler;
};

const SystemColumn: React.FC<Props> = ({ row, removeHandler }) => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const handleClickAction = useCallback(
    (actionName: ActionName): HandlerEvent => (e) => {
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

  const [handleActionPlay, handleActionEdit, handleActionRemove] = useMemo(
    () => [
      handleClickAction(ActionName.play),
      handleClickAction(ActionName.edit),
      handleClickAction(ActionName.remove),
    ],
    [handleClickAction]
  );

  if (matches) {
    return (
      <ButtonViewSystemColumn
        handleActionPlay={handleActionPlay}
        handleActionEdit={handleActionEdit}
        handleActionRemove={handleActionRemove}
      />
    );
  }

  return (
    <DropdownViewSystemColumn
      handleActionPlay={handleActionPlay}
      handleActionEdit={handleActionEdit}
      handleActionRemove={handleActionRemove}
    />
  );
};

export default React.memo(SystemColumn);
