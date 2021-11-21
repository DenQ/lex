import React from 'react';
import {
	DataGrid,
	DataGridProps,
} from '@mui/x-data-grid';

export type Props = {} & DataGridProps;

const TableComponent: React.FC<Props> = ({ pageSize, ...rent }) => (
	<DataGrid
		{...rent}
		pageSize={pageSize}
		// checkboxSelection
	/>
);

export default TableComponent;
