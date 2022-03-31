import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { Folder } from 'common/@interfaces/folders';

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
    align: 'right',
    headerAlign: 'right',
    headerClassName: 'super-app-theme--header',
    sortable: true,
    renderCell: (cellParams: GridRenderCellParams) => (
      <ProgressColumn value={cellParams.value} />
    ),
    sortComparator: (a, b, v1, v2) => {
      const folder1 = v1.api.getRow(v1.id) as Folder;
      const folder2 = v2.api.getRow(v2.id) as Folder;

      return (folder1.progress as number) - (folder2.progress as number);
    },
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
