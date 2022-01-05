import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import styles from './TableGeneral.module.scss';

export type Props = DataGridProps & {
  headerColumnSimpleView?: boolean;
  checkboxSelectionMode?: boolean;
};

const TableComponent: React.FC<Props> = ({
  density = 'compact',
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
    <div className={styles.component}>
      <DataGrid
        {...rent}
        autoHeight
        pageSize={pageSize}
        density={density}
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 900,
            color: '#555'
          },
        }}
        {...columnProps}
        {...checkboxSelectionProps}
      />
    </div>
  );
};

export default TableComponent;
