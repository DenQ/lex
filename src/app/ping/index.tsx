import React from 'react';
import TableComponent from '../../lib/tables/general';
import { getColumns } from '../../lib/tables/general/columns/columns-definitions';
import getMockRows from '../../lib/tables/general/utsils/get-mock-rows';

type Props = {};

const PingPage: React.FC<Props> = () => {
  const columns = getColumns();
  const rows = getMockRows(100);

  return (
    <>
      <TableComponent columns={columns} rows={rows} />
    </>
  );
};

export default PingPage;
