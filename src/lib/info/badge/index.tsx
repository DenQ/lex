import React, { ReactNode } from 'react';
import MUIBadge, { BadgeOrigin } from '@material-ui/core/Badge';

export interface Props {
	value: ReactNode;
	color?: 'default' | 'primary' | 'secondary' | 'error';
	rectangle?: boolean;
	allowZero?: boolean;
	dot?: boolean;
	positionLeft?: boolean;
	positionBottom?: boolean;
}

export const Badge: React.FC<Props> = ({
	children,
	color = 'default',
	value,
	rectangle = false,
	allowZero = false,
	dot = false,
	positionLeft = false,
	positionBottom = false,
}) => {
	const overlap = rectangle ? 'rectangle' : 'circle';
	const variant = dot ? 'dot' : 'standard';
	const anchorOrigin: BadgeOrigin = {
		vertical: positionBottom ? 'bottom' : 'top',
		horizontal: positionLeft ? 'left' : 'right',
	};

	return (
		<MUIBadge
			anchorOrigin={anchorOrigin}
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
