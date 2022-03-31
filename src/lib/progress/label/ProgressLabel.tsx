import React from 'react';
import Chip from '@mui/material/Chip';

import { getColor } from './utils/getColor';
import { ProgressLabelProps } from './types';

const ProgressLabel: React.FC<ProgressLabelProps> = ({
  percentValue,
  text,
  variant = 'filled',
  size = 'small'
}) => {
  const color = getColor(percentValue);

  return <Chip label={text} color={color} variant={variant} size={size} />;
};

export default ProgressLabel;
