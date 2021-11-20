import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
	root: {
		minWidth: 170,
		minHeight: 170,
		float: 'left',
	},
	title: {
		fontSize: 14,
	},
	playButton: {
		marginLeft: 40,
		marginTop: 35,
	},
});

const Component = props => {
	const classes = useStyles();
	const { to, history } = props;

	const onClickToFolder = () => {
		history.push(to);
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				<Fab
					aria-label="add-new"
					size="large"
					className={classes.playButton}
					onClick={onClickToFolder}
				>
					<AddCircleIcon color="secondary" />
				</Fab>
			</CardContent>
		</Card>
	);
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
