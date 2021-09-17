import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { removeById } from 'api/words';

import { useGetList } from 'app/words/list/hooks/get-list';
import PresenterWord from '../presenter';

const WordsListPage = ({ folderId, readOnly }) => {
	const [needRefresh, setNeedRefresh] = React.useState(null);

	const list = useGetList({
		folderId,
		needRefresh,
	});

	const isShowListHeader = React.useMemo(
		() => (list.length > 0 && !readOnly) || list.length > 0,
		[readOnly, list.length]
	);

	const handleRemove = ({ id }) => {
		removeById({ id })
			.then(() => {
				setNeedRefresh(+new Date());
			})
			.catch(e => {
				console.log('Error', e);
			});
	};

	return (
		<Box m={2}>
			{isShowListHeader && <Typography variant="button">List words</Typography>}
			<List>
				{!readOnly && <PresenterWord folderId={folderId} isNew />}
				{list.map(item => (
					<PresenterWord
						folderId={folderId}
						data={item}
						key={item.id}
						readOnly={readOnly}
						handleRemove={handleRemove}
					/>
				))}
			</List>
		</Box>
	);
};

WordsListPage.propTypes = {
	folderId: PropTypes.number.isRequired,
	readOnly: PropTypes.bool,
};

WordsListPage.defaultProps = {
	readOnly: false,
};

export default WordsListPage;
