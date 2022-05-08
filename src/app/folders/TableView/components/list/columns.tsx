import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { Folder } from 'common/@interfaces/folders';

import ProgressColumn from './ProgressColumn';
import SystemColumn from '../SystemColumn/SystemColumn';
import { RemoveHandler } from '../../../@types/list';

type Input = {
  removeHandler: RemoveHandler;
  isCompactView: boolean
};

export const getColumns = ({ removeHandler, isCompactView }: Input): GridColDef[] => [
  {
    field: 'id',
    headerName: 'ID',
    width: 75,
    align: 'right',
    headerAlign: 'right',
    headerClassName: 'super-app-theme--header',
    hide: isCompactView
  },
  { field: 'name', headerName: 'Name', flex: 2 },
  {
    field: 'description',
    headerClassName: 'super-app-theme--header',
    headerName: 'Description',
    flex: 2,
    hide: isCompactView
  },
  {
    field: 'words',
    headerName: 'Words',
    flex: 1,
    align: 'right',
    headerAlign: 'right',
    headerClassName: 'super-app-theme--header',
    sortable: true,
    renderCell: (cellParams: GridRenderCellParams) => (
      <>{cellParams.value?.length || 0}</>
    ),
    sortComparator: (a, b, v1, v2) => {
      const folder1 = v1.api.getRow(v1.id) as Folder;
      const folder2 = v2.api.getRow(v2.id) as Folder;

      return (folder1?.words?.length || 0) - (folder2.words?.length || 0);
    },
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
    flex: isCompactView ? 1 : 2,
    align: 'right',
    headerAlign: 'center',
    sortable: false,
    renderCell: (cellParams: GridRenderCellParams) => (
      <SystemColumn row={cellParams.row} removeHandler={removeHandler} />
    ),
  },
];
