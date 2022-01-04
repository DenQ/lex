import React from 'react';
import {
  GridColDef,
  GridRenderCellParams,
  // GridRenderCellParams,
  // GridValueGetterParams,
} from '@mui/x-data-grid';
import SystemColumn from './SystemColumn';

export const getColumns = (): GridColDef[] => [
  {
    field: 'id',
    headerName: 'ID',
    width: 75,
    align: 'right',
    headerAlign: 'right',
    headerClassName: 'super-app-theme--header',
  },
  { field: 'name', headerName: 'Name', flex: 2 },
  {
    field: 'description',
    headerClassName: 'super-app-theme--header',
    headerName: 'Description',
    flex: 3,
  },
  {
    field: 'system',
    headerName: '',
    flex: 1,
    align: 'right',
    headerAlign: 'center',
    renderCell: (cellParams: GridRenderCellParams) => (
      <SystemColumn row={cellParams.row} />
    ),
  },
];
