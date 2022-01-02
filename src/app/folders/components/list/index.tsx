import React from 'react';
import { Folders } from 'common/@interfaces/folders';
import TableComponent from 'lib/tables/general';
import { getColumns } from './columns';

type Props = {
  list: Folders;
};

const TableFolders: React.FC<Props> = ({ list }) => {
  const columns = getColumns();

  return (
    <>
      <TableComponent rows={list} columns={columns} />
    </>
  );
};

export default TableFolders;
