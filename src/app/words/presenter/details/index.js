import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { fieldNames } from '../../form/constants';

const Component = props => {
	const {
		data: { [fieldNames.WORD_NATIVE]: native, [fieldNames.WORD_TRANSLATION]: translation },
	} = props;

	return (
		<ListItem button>
			<Typography>
				{native} - {translation}
			</Typography>
		</ListItem>
	);
};

Component.propTypes = {
	data: PropTypes.shape({
		[fieldNames.ID]: PropTypes.number,
		[fieldNames.FOLDER_ID]: PropTypes.number,
		[fieldNames.WORD_NATIVE]: PropTypes.string,
		[fieldNames.WORD_TRANSLATION]: PropTypes.string,
	}).isRequired,
};

Component.defaultProps = {};

export default Component;
