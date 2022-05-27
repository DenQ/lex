import React from 'react';
import Box from '@material-ui/core/Box';
import Text from 'lib/text';

type Props = {
  title: string;
  message: string;
}

const NoData: React.FC<Props>  = ({ title, message }) => (
  <Box m={2}>
    <Text color="primary" variant="h5" align="center">
      {title}
    </Text>
    <Text color="textSecondary" align="center" paragraph>
      {message}
    </Text>
  </Box>
);

export default NoData;
