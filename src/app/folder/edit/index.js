import React from 'react';
// import PropTypes from 'prop-types';

import WordsList from 'app/words/list';
import GeneralLayout from 'app/system/layout';
import Header from '../components/header';

import Layout from '../components/layout';
import FolderForm from '../form';
import { useFindById, buildBreadCrumbsProps } from '../utils';
import { controlNames } from '../constants';

const Component = props => {
	const { entity, id } = useFindById(props);

	if (!entity) {
		return 'Loading';
	}

	const initialValues = {
		...entity,
	};

	const breadcrumbsProps = buildBreadCrumbsProps({
		folderName: entity.name,
		actionName: 'Edit',
	});

	return (
		<GeneralLayout title="Edit Folder">
			<Layout>
				<Header id={id} controls={[controlNames.TO_REMOVE]} breadcrumbsProps={breadcrumbsProps} />
				<FolderForm initialValues={initialValues} />
				<WordsList folderId={entity.id} />
			</Layout>
		</GeneralLayout>
	);
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
