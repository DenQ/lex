import React from 'react';
import Box from '@material-ui/core/Box';
import BreadCrumbs from 'common/components/bread-crumbs';
import { TBreadCrumb } from '../../utils';

type Props = {
	breadCrumbs: Array<TBreadCrumb>;
};

export const Header: React.FC<Props> = ({ breadCrumbs }) => (
	<Box m={2}>
		<BreadCrumbs data={breadCrumbs} />
	</Box>
);
