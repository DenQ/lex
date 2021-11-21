import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

export type Props = {
  headerColumnSimpleView: boolean;
  checkboxSelectionMode: boolean;
} & DataGridProps;

const TableComponent: React.FC<Props> = ({
  density = 'standard',
  pageSize = 10,
  headerColumnSimpleView = true,
  checkboxSelectionMode = false,
  ...rent
}) => {
  const columnProps = headerColumnSimpleView
    ? {
        disableColumnMenu: true,
        disableColumnFilter: true,
        disableColumnSelector: true,
      }
    : {};
  const checkboxSelectionProps = checkboxSelectionMode
    ? {
        disableSelectionOnClick: false,
        checkboxSelection: true,
      }
    : {
        disableSelectionOnClick: true,
        checkboxSelection: false,
      };

  return (
    <DataGrid
      {...rent}
      pageSize={pageSize}
      density={density}
      {...columnProps}
      {...checkboxSelectionProps}
    />
  );
};

export default TableComponent;
