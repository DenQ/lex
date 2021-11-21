import React from 'react';
import { Button } from '@mui/material';

type Props = {
  row: any;
};

const SystemColumn: React.FC<Props> = ({ row }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    alert(JSON.stringify(row, null, 2));
  };

  return (
    <>
      <Button onClick={onClick} variant="text">
        Edit
      </Button>
    </>
  );
};

export default React.memo(SystemColumn);
