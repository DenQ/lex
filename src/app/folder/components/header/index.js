import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import urlManager from 'common/utils/url-manager';
import { controlNames } from '../../constants';


const Component = (props) => {
    const history = useHistory();
    const { id, controls } = props;

    const toEditHandler = () => {
        const to = urlManager.folder().edit(id);
        history.push(to);
    };

    const toRemoveHandler = () => {
        console.log('Removed', id);
    };

    const collectionControls = [];

    if (controls.includes(controlNames.TO_EDIT)) {
        collectionControls.push(
            <Button color="primary" onClick={toEditHandler} key="to-edit">To Edit</Button>
        );
    }

    if (controls.includes(controlNames.TO_REMOVE)) {
        collectionControls.push(
            <Button color="secondary" onClick={toRemoveHandler} key="to-remove">Remove</Button>
        );
    }

    return collectionControls;
};

Component.propTypes = {
    id: PropTypes.number,
    controls: PropTypes.array,
};

Component.defaultProps = {
    id: null,
    controls: [],
};

export default Component;