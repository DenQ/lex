import React from 'react';

import WordsList from 'app/words/list';
import GeneralLayout from 'app/system/layout';

import Layout from '../components/layout';
import FolderForm from '../form';
import HeaderEditFolder from './components/header';
import { useFindById } from '../utils';

const Component = ({ match }) => {
  const { entity } = useFindById({ match });

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  };

  return (
    <GeneralLayout title="Edit Folder">
      <Layout>
        <HeaderEditFolder entity={entity} />
        <FolderForm initialValues={initialValues} />
        <WordsList folderId={entity.id} />
      </Layout>
    </GeneralLayout>
  );
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
