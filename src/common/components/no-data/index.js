import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Text from 'lib/text';

const NoDataComponent = ({ title, message }) => (
	<Box m={2}>
		<Text color="primary" variant="h5" align="center">
			{title}
		</Text>
		<Text color="textSecondary" align="center" paragraph>
			{message}
		</Text>
	</Box>
);

NoDataComponent.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

NoDataComponent.defaultProps = {};

export default NoDataComponent;
