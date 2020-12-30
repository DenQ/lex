import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ToolbarApp from 'app/system/toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Component = (props) => {
    const classes = useStyles();
    const { title, isHome } = props;

    return (
      <div className={classes.root}>
        <ToolbarApp title={title} isHome={isHome}/>
        <br />
        {props.children}
      </div>
    );
};

Component.propTypes = {
    title: PropTypes.string.isRequired,
};

Component.defaultProps = {
};

export default Component;
