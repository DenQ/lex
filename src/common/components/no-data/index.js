import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Component = ({ title, message }) => (
		<Box m={2}>
			<Typography color="primary" variant="h5" align="center">
				{title}
			</Typography>
			<Typography color="textSecondary" align="center" paragraph>
				{message}
			</Typography>
		</Box>
	);

Component.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

Component.defaultProps = {};

export default Component;
