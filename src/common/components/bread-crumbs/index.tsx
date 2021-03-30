import React from 'react';
// import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export type IDataItem = {
    to?: string,
    title: string,
};

export type BreadcrumbsPropTypes = {
    data: Array<IDataItem>,
}

const useStyles = makeStyles(() => {
    return {
        link: {
            color: 'inherit',
            textDecoration: 'none',
        },
    };
});


const Component = ({
    data,
}: BreadcrumbsPropTypes) => {
    const classes = useStyles();

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
            {data.map((item: IDataItem, index: number) => {
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

// export const BreadcrumbsPropTypes = PropTypes.arrayOf(
//     PropTypes.shape({
//         to: PropTypes.string,
//         title: PropTypes.string.isRequired,
//     }),
// );

// Component.propTypes = {
//     data: BreadcrumbsPropTypes,
// };

// Component.defaultProps = {
//     data: [],
// };

export default Component;
