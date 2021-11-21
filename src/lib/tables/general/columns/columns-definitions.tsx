import React from 'react';
import {
	GridColDef,
	GridRenderCellParams,
	GridValueGetterParams,
} from '@mui/x-data-grid';
import SystemColumn from '../components/system-column';

export const getColumns = (): GridColDef[] => [
	{ field: 'id', headerName: 'ID', width: 50 },
	{ field: 'firstName', headerName: 'First name', width: 150 },
	{ field: 'lastName', headerName: 'Last name', width: 150 },
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 150,
		sortComparator: (v1, v2): number => (Number(v1) >= Number(v2) ? 1 : 0),
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		width: 260,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.getValue(params.id, 'firstName') || ''} ${
				params.getValue(params.id, 'lastName') || ''
			}`,
	},
	{
		field: 'system',
		headerName: '',
		width: 200,
		renderCell: (cellParams: GridRenderCellParams) => (
			<SystemColumn row={cellParams.row} />
		),
	},
];
