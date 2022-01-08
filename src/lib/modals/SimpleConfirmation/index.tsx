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
  onYes: () => Promise<any>;
  onNo: () => Promise<any>;
  isShow: boolean;
};

const SimpleConfirmation: React.FC<Props> = ({
  title,
  message,
  onYes,
  onNo,
  isShow,
}) => {
  const onYesHandler = () => {
    onYes();
  };
  const onNoHandler = () => {
    onNo();
  };

  return (
    <Dialog
      // maxWidth={size}
      fullWidth
      open={isShow}
      // TransitionComponent={Transition}
      keepMounted
      onClose={onNoHandler}
      // aria-labelledby="alert-dialog-slide-title"
      // aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onNoHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={onYesHandler} color="secondary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleConfirmation;
