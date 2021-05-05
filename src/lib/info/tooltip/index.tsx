import React, { ReactFragment, useMemo } from 'react';
import MUITooltip from '@material-ui/core/Tooltip';

export interface Props {
	value: ReactFragment;
	children: React.ReactElement;
	side?: 'bottom' | 'left' | 'top' | 'right';
	edge?: 'start' | 'end' | 'center';
}

export const Tooltip = ({
	value,
	children,
	side = 'top',
	edge = 'center',
}: Props) => {
	const placement = useMemo(() => {
		if (edge === 'center') return side;

		return `${side}-${edge}`;
	}, [side, edge]);

	return (
		// @ts-ignore
		<MUITooltip title={value} placement={placement} arrow interactive>
			{children}
		</MUITooltip>
	);
};
