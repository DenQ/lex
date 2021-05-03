import React, { ReactFragment } from 'react';
import MUITooltip from '@material-ui/core/Tooltip';

export interface Props {
	value: ReactFragment;
	side?: 'bottom' | 'left' | 'top' | 'right';
	edge?: 'start' | 'end';
	children: React.ReactElement;
}

export const Tooltip = ({
	value,
	children,
	side = 'top',
	edge = undefined,
}: Props) => {
	const placement: string = edge ? `${side}-${edge}` : side;

	return (
		// @ts-ignore
		<MUITooltip title={value} placement={placement} arrow interactive>
			{children}
		</MUITooltip>
	);
};
