import React, { ReactFragment, useMemo } from 'react';
import MUITooltip from '@material-ui/core/Tooltip';

export interface Props {
	value: ReactFragment;
	side?: 'bottom' | 'left' | 'top' | 'right';
	edge?: 'start' | 'center' | 'end';
	children: React.ReactElement;
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
		<MUITooltip title={value} placement={placement} arrow>
			{children}
		</MUITooltip>
	);
};
