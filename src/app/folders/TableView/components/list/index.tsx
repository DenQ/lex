import React from 'react';
import { Folders } from 'common/@interfaces/folders';
import TableComponent from 'lib/tables/general';
import { getColumns } from './columns';
import { RemoveHandler } from '../../../@types/list';

type Props = {
  list: Folders;
  loading: boolean;
  removeHandler: RemoveHandler;
};

const TableFolders: React.FC<Props> = ({ list, loading, removeHandler }) => {
  const columns = getColumns({ removeHandler });

  return <TableComponent rows={list} columns={columns} loading={loading} />;
};

export default TableFolders;
