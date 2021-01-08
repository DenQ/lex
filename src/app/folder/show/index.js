import React from 'react';
// import PropTypes from 'prop-types';

import GeneralLayout from 'app/system/layout';
import WordsList from 'app/words/list';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout';
import Header from '../components/header';
import Form from '../form';
import { useFindById, buildBreadCrumbsProps } from '../utils';
import { controlNames } from '../constants';

const Component = (props) => {
  const { entity, id } = useFindById(props);

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  };

  const breadcrumbsProps = buildBreadCrumbsProps({
      folderName: entity.name,
      actionName: 'Details',
  });

  return (
    <GeneralLayout title="Details Folder">
        <Layout>
          <Header
            id={id}
            controls={[
              controlNames.TO_EDIT,
              controlNames.TO_REMOVE
            ]}
            breadcrumbsProps={breadcrumbsProps}
          />
            <Box m={2}>
                <Form initialValues={initialValues} readOnly />
                <WordsList folderId={entity.id} readOnly />
            </Box>
        </Layout>
    </GeneralLayout>
  );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
