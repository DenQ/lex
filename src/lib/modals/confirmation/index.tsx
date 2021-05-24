import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef((
	// eslint-disable-next-line react/require-default-props
	props: TransitionProps & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>
) => <Slide direction="up" ref={ref} {...props} timeout={300} />);

export interface Props {
	open: boolean;
	title: string;
	message: string;
	onCancel?: () => void;
	onYes?: () => void;
	size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | undefined;
}

export const ConfirmationModal = ({
	open,
	title,
	message,
	onCancel,
	onYes,
	size = 'xs',
}: Props) => (
	<Dialog
		maxWidth={size}
		fullWidth
		open={open}
		TransitionComponent={Transition}
		keepMounted
		onClose={onCancel}
		aria-labelledby="alert-dialog-slide-title"
		aria-describedby="alert-dialog-slide-description"
	>
		<DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-slide-description">
				{message}
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onCancel} color="primary">
				Cancel
			</Button>
			<Button onClick={onYes} color="secondary">
				Yes
			</Button>
		</DialogActions>
	</Dialog>
);
