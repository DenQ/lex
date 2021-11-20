import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export type Props = {} & TypographyProps;

const Text: React.FC<Props> = ({
	children,
	align = 'left',
	variant = 'body1',
	...others
}) => <Typography align={align} variant={variant} {...others}>{children}</Typography>;

export default Text;
