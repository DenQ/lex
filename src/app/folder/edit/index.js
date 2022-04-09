import React, { useCallback } from 'react';

import WordsList from 'app/words/list';
import GeneralLayout from 'app/system/layout';
import { useGetList } from 'app/words/list/hooks/get-list';
import { orderListByName } from 'app/words/list/utils/ordering';

import Layout from '../components/layout';
import FolderForm from '../form';
import HeaderEditFolder from './components/header';
import { useFindById } from '../utils';

const Component = ({ match }) => {
  const { entity } = useFindById({ match });
  const [needRefresh, setNeedRefresh] = React.useState(null);
  const prepareList = useCallback(list => orderListByName({ list }), []);

  const list = useGetList({
    folderId: entity?.id || 0,
    needRefresh,
    prepareList,
  });

  if (!entity) {
    return 'Loading';
  }

  const initialValues = {
    ...entity,
  };

  return (
    <GeneralLayout title="Edit Folder">
      <Layout>
        <HeaderEditFolder entity={entity} counterWords={list.length}/>
        <FolderForm initialValues={initialValues} />
        <WordsList
          folderId={entity.id}
          list={list}
          setNeedRefresh={setNeedRefresh}
        />
      </Layout>
    </GeneralLayout>
  );
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
