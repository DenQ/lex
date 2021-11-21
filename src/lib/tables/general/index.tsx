import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

export type Props = {
	headerColumnSimpleView: boolean;
} & DataGridProps;

const TableComponent: React.FC<Props> = ({
	density = 'standard',
	pageSize = 10,
	headerColumnSimpleView = true,
	...rent
}) => {
	const columnProps = headerColumnSimpleView
		? {
				disableColumnMenu: true,
				disableColumnFilter: true,
				disableColumnSelector: true,
		  }
		: {};

	return (
		<DataGrid
			{...rent}
			pageSize={pageSize}
			density={density}
			{...columnProps}
			// checkboxSelection
		/>
	);
};

export default TableComponent;
