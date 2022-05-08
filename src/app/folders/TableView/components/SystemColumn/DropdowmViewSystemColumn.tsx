import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

import { HandlerEvent, SystemColumnViewProps } from './types';
import { ActionTitle } from '../../../@types/list';

const MenuItemPrimary = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));
const MenuItemSecondary = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const BUTTON_ID = 'button-for-open-menu';
const MENU_ID = 'menu-folder-list';

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
  const handleClickWrapper =
    (cb: HandlerEvent): HandlerEvent =>
    e => {
      handleClose();
      cb(e);
    };

  return (
    <>
      <Button
        id={BUTTON_ID}
        aria-controls={open ? MENU_ID : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="small"
      >
        Actions
      </Button>
      <Menu
        id={MENU_ID}
        aria-labelledby={BUTTON_ID}
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
        <MenuItemPrimary onClick={handleClickWrapper(handleActionPlay)}>
          {ActionTitle.play}
        </MenuItemPrimary>
        <MenuItemPrimary onClick={handleClickWrapper(handleActionEdit)}>
          {ActionTitle.edit}
        </MenuItemPrimary>
        <MenuItemSecondary onClick={handleClickWrapper(handleActionRemove)}>
          {ActionTitle.remove}
        </MenuItemSecondary>
      </Menu>
    </>
  );
};

export default React.memo(DropdownViewSystemColumn);
