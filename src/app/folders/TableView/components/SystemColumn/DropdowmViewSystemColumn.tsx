import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SystemColumnViewProps } from './types';

const DropdownViewSystemColumn: FC<SystemColumnViewProps> = ({
  handleActionPlay,
  handleActionEdit,
  handleActionRemove,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="small"
      >
        Actions
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleActionPlay}>Play</MenuItem>
        <MenuItem onClick={handleActionEdit}>Edit</MenuItem>
        <MenuItem
          onClick={handleActionRemove}
          sx={theme => ({
            color: theme.palette.secondary.main,
          })}
        >
          Remove
        </MenuItem>
      </Menu>
    </div>
  );
};

export default React.memo(DropdownViewSystemColumn);
