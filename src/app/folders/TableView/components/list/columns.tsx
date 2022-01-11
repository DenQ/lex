import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import ProgressColumn from './ProgressColumn';
import SystemColumn from './SystemColumn';
import { RemoveHandler } from '../../../@types/list';

type Input = {
  removeHandler: RemoveHandler;
};

export const getColumns = ({ removeHandler }: Input): GridColDef[] => [
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
    field: 'progress',
    headerName: 'Progress',
    flex: 1,
    renderCell: (cellParams: GridRenderCellParams) => (
      <ProgressColumn row={cellParams.row} />
    ),
  },
  {
    field: 'system',
    headerName: '',
    flex: 2,
    align: 'right',
    headerAlign: 'center',
    sortable: false,
    renderCell: (cellParams: GridRenderCellParams) => (
      <SystemColumn row={cellParams.row} removeHandler={removeHandler} />
    ),
  },
];
