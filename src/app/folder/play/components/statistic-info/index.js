import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Text from 'lib/text';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

export const Component = ({ value }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" value={value} />
				</Box>
				<Box minWidth={35}>
					<Text variant="body2" color="textSecondary">{`${Math.round(
						value
					)}%`}</Text>
				</Box>
			</Box>
		</div>
	);
};

Component.propTypes = {
	value: PropTypes.number.isRequired,
};

Component.defaultProps = {};

export default Component;
