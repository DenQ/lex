import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { removeById } from 'api/words';
import { useGetList } from 'app/words/list/hooks/get-list';

import { orderListByName } from 'app/words/list/utils/ordering';
import PresenterWord from '../presenter';

const WordsListPage = ({ folderId, readOnly }) => {
	const [needRefresh, setNeedRefresh] = React.useState(null);
	const prepareList = useCallback(list => orderListByName({ list }), []);

	const list = useGetList({
		folderId,
		needRefresh,
		prepareList,
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
				{!readOnly && <PresenterWord folderId={folderId} isNew words={list} />}
				{list.map(item => (
					<PresenterWord
						folderId={folderId}
						data={item}
						key={item.id}
						readOnly={readOnly}
						handleRemove={handleRemove}
						words={list}
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
