import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { removeById } from 'api/folders';
import { removeByFolderId } from 'api/words';
import urlManager from 'common/utils/url-manager';
import BreadCrumbs, {
	BreadcrumbsPropTypes,
} from 'common/components/bread-crumbs';

import { controlNames } from '../../constants';

const Component = props => {
	const history = useHistory();
	const { id, controls, breadcrumbsProps } = props;

	const toEditHandler = () => {
		const to = urlManager.folder().edit(id);
		history.push(to);
	};

	const toRemoveHandler = () => {
		removeById({ id })
			.then(r => removeByFolderId({ folderId: id }))
			.then(r => {
				const to = urlManager.folders();
				history.push(to);
			})
			.catch(e => {
				console.log('Catch error', e);
			});
	};

	const collectionControls = [];

	if (controls.includes(controlNames.TO_EDIT)) {
		collectionControls.push(
			<Button color="primary" onClick={toEditHandler} key="to-edit">
				To Edit
			</Button>,
		);
	}

	if (controls.includes(controlNames.TO_REMOVE)) {
		collectionControls.push(
			<Button color="secondary" onClick={toRemoveHandler} key="to-remove">
				Remove
			</Button>,
		);
	}
	const breadcrumbs = breadcrumbsProps && (
		<BreadCrumbs data={breadcrumbsProps} />
	);

	return (
		<>
			<Box m={2}>{breadcrumbs}</Box>
			<Box m={2}>{collectionControls}</Box>
		</>
	);
};

Component.propTypes = {
	id: PropTypes.number,
	controls: PropTypes.array,
	breadcrumbsProps: BreadcrumbsPropTypes,
};

Component.defaultProps = {
	id: null,
	controls: [],
};

export default Component;
