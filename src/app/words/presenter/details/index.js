import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

import Text from 'lib/text';
import { fieldNames } from 'common/@types/words';

const Component = props => {
	const {
		data: {
			[fieldNames.WORD_NATIVE]: native,
			[fieldNames.WORD_TRANSLATION]: translation,
		},
	} = props;

	return (
		<ListItem button>
			<Text variant="body1">
				{native} - {translation}
			</Text>
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
