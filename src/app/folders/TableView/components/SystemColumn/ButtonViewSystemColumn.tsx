import React from 'react';
import { Button } from '@mui/material';
import { SystemColumnViewProps } from './types';
import { ActionTitle } from '../../../@types/list';

const ButtonViewSystemColumn: React.FC<SystemColumnViewProps> = ({
  handleActionPlay,
  handleActionEdit,
  handleActionRemove,
}) => (
  <>
    <Button onClick={handleActionPlay} variant="text" size="small">
      {ActionTitle.play}
    </Button>
    <Button onClick={handleActionEdit} variant="text" size="small">
      {ActionTitle.edit}
    </Button>
    <Button
      onClick={handleActionRemove}
      variant="text"
      color="secondary"
      size="small"
    >
      {ActionTitle.remove}
    </Button>
  </>
);

export default React.memo(ButtonViewSystemColumn);
