import React from 'react';

import ProgressLabel from 'lib/progress/label/ProgressLabel';

type Props = {
  value: number;
};

const ProgressColumn: React.FC<Props> = ({ value }) => (
  <ProgressLabel
    variant="outlined"
    percentValue={value}
    text={`${Math.round(value)} %`}
  />
);

export default ProgressColumn;
