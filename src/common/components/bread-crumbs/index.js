import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles((theme, ...o) => {
    return {
        link: {
            color: 'inherit',
            textDecoration: 'none',
        },
    };
});

const Component = ({
    data,
}) => {
    const classes = useStyles();

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
            {data.map((item, index) => {
                if (!item.to) {
                    return (
                        <Typography color="textPrimary" key="last">{item.title}</Typography>
                    );
                }

                return (
                    <Link color="inherit" to={item.to} className={classes.link} key={index}>
                        {item.title}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export const BreadcrumbsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        to: PropTypes.string,
        title: PropTypes.string.isRequired,
    }),
);

Component.propTypes = {
    data: BreadcrumbsPropTypes,
};

Component.defaultProps = {
    data: [],
};

export default Component;
