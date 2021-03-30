import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface IPropTypes {
    title: string,
    message: string,
};

const Component = ({
    title,
    message,
}: IPropTypes) => {
    return (
        <Box m={2}>
            <Typography color="primary" variant="h5" align="center">{title}</Typography>
            <Typography color="textSecondary" align="center" paragraph>{message}</Typography>
        </Box>
    );
};

export default Component;
