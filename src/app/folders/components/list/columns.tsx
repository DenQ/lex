import React from 'react';
import {
  GridColDef,
  GridRenderCellParams,
  // GridRenderCellParams,
  // GridValueGetterParams,
} from '@mui/x-data-grid';
import SystemColumn from './SystemColumn';

export const getColumns = (): GridColDef[] => [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Description', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
  {
    field: 'system',
    headerName: '',
    width: 250,
    renderCell: (cellParams: GridRenderCellParams) => (
      <SystemColumn row={cellParams.row} />
    ),
  },
];
