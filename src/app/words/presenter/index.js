import React from 'react';
import PropTypes from 'prop-types';

import Form from '../form';
import { fieldNames } from '../form/constants';

const PresenterComponent = (props) => {
    const {
        isNew,
        folderId,
        data,
    } = props;

    if (isNew) {
        const initialValues = {
            [fieldNames.FOLDER_ID]: folderId,
        };
        return (
            <Form initialValues={initialValues} />
        );
    }

    const initialValues = {
        [fieldNames.ID]: data[fieldNames.ID],
        // [fieldNames.FOLDER_ID]: data[fieldNames.FOLDER_ID],
        [fieldNames.FOLDER_ID]: folderId,
        [fieldNames.WORD_NATIVE]: data[fieldNames.WORD_NATIVE],
        [fieldNames.WORD_TRANSLATION]: data[fieldNames.WORD_TRANSLATION],
    };

    return (
        <Form initialValues={initialValues} />
    );
};

PresenterComponent.propTypes = {
    isNew: PropTypes.bool,
    folderId: PropTypes.number.isRequired,
};

PresenterComponent.defaultProps = {
    isNew: false,
};

export default PresenterComponent;
