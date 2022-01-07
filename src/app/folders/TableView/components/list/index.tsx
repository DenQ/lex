import React from 'react';
import { Folders } from 'common/@interfaces/folders';
import TableComponent from 'lib/tables/general';
import { getColumns } from './columns';

type Props = {
  list: Folders;
  loading: boolean;
};

const TableFolders: React.FC<Props> = ({ list, loading }) => {
  const columns = getColumns();

  return <TableComponent rows={list} columns={columns} loading={loading} />;
};

export default TableFolders;