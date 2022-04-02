import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import Text from 'lib/text';

type Props = {
  value: number;
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const PlayStatisticInfo: React.FC<Props> = ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box minWidth={35}>
          <Text variant="body2" color="textSecondary">{`${Math.round(
            value
          )}%`}</Text>
        </Box>
      </Box>
    </div>
  );
};

export default PlayStatisticInfo;
