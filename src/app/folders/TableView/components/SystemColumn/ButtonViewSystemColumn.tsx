import React from 'react';
import { Button } from '@mui/material';
import { SystemColumnViewProps } from './types';

const ButtonViewSystemColumn: React.FC<SystemColumnViewProps> = ({
  handleActionPlay,
  handleActionEdit,
  handleActionRemove,
}) => (
  <>
    <Button onClick={handleActionPlay} variant="text" size="small">
      Play
    </Button>
    <Button onClick={handleActionEdit} variant="text" size="small">
      Edit
    </Button>
    <Button
      onClick={handleActionRemove}
      variant="text"
      color="secondary"
      size="small"
    >
      Remove
    </Button>
  </>
);

export default ButtonViewSystemColumn;
