import React, { memo } from 'react';
import { Folder } from 'common/@interfaces/folders';
import TableComponent from 'lib/tables/general';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getColumns } from './columns';
import { RemoveHandler } from '../../../@types/list';

type Props = {
  list: Folder[];
  loading: boolean;
  removeHandler: RemoveHandler;
};

const TableFolders: React.FC<Props> = ({ list, loading, removeHandler }) => {
  const theme = useTheme();
  const isLargeView = useMediaQuery(theme.breakpoints.up('lg'));
  const columns = getColumns({ removeHandler, isCompactView: !isLargeView });

  return <TableComponent rows={list} columns={columns} loading={loading} />;
};

export default memo(TableFolders);
