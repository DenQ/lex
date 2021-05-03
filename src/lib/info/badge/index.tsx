import React, { ReactNode, useMemo } from 'react';
import MUIBadge from '@material-ui/core/Badge';

export interface Props {
	color?: 'default' | 'primary' | 'secondary' | 'error';
	value: ReactNode;
	rectangle?: boolean;
	allowZero?: boolean;
	dot?: boolean;
}

export const Badge: React.FC<Props> = ({
	children,
	color = 'default',
	value,
	rectangle = false,
	allowZero = false,
	dot = false,
}) => {
	const overlap = rectangle ? 'rectangle' : 'circle';
	const variant = dot ? 'dot' : 'standard';

	return (
		<MUIBadge
			badgeContent={value}
			color={color}
			overlap={overlap}
			showZero={allowZero}
			variant={variant}
		>
			{children}
		</MUIBadge>
	);
};
