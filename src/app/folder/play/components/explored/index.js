import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Explored = ({ restartFolderHandler }) => (
		<>
			<Box m={2}>
				<Typography color="primary" variant="h5" align="center">
					This folder explored
				</Typography>
				<Typography color="textSecondary" align="center" paragraph>
					You can restart this folder
				</Typography>
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
