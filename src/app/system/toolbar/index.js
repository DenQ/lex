import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import urlManager from 'common/utils/url-manager';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(0),
    },
    link: {
        color: 'inherit'
    },
    title: {
      flexGrow: 1,
    },
}));

const Component = (props) => {
    const classes = useStyles();
    const {
        title,
        isHome,
    } = props;
    const urlToHome = urlManager.folders();

    const linkToHome = !isHome && (
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
            <Link to={urlToHome} className={classes.link}>
                <HomeIcon />
            </Link>
        </IconButton>
    );

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            {linkToHome}
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
            <Button color="inherit">Settings</Button>
            </Toolbar>
        </AppBar>
    );
};

Component.propTypes = {
    title: PropTypes.string.isRequired,
    isHome: PropTypes.bool,
};

Component.defaultProps = {
    isHome: false,
};

export default Component;
