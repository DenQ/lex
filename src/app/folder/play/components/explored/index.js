import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Text from 'lib/text';

const Explored = ({ restartFolderHandler }) => (
	<>
		<Box m={2}>
			<Text color="primary" variant="h5" align="center">
				This folder explored
			</Text>
			<Text color="textSecondary" align="center" paragraph>
				You can restart this folder
			</Text>
			<Grid container direction="column" justify="flex-end" alignItems="center">
				<Button color="secondary" size="small" onClick={restartFolderHandler}>
					Restart
				</Button>
			</Grid>
		</Box>
	</>
);

Explored.propTypes = {
	restartFolderHandler: PropTypes.func.isRequired,
};

Explored.defaultProps = {};

export default Explored;
