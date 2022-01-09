import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
  title: string;
  message: string;
  onYes: <T>() => Promise<T>;
  onNo: <T>() => Promise<T>;
  isShow: boolean;
};

const SimpleConfirmation: React.FC<Props> = ({
  title,
  message,
  onYes,
  onNo,
  isShow,
}) => (
  <Dialog fullWidth open={isShow} keepMounted onClose={onNo}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onNo} color="primary">
        Cancel
      </Button>
      <Button onClick={onYes} color="secondary" variant="text">
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default SimpleConfirmation;
