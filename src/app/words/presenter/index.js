import React from 'react';
import PropTypes from 'prop-types';

import Form from '../form';
import Details from './details';
import { fieldNames } from '../form/constants';

const PresenterComponent = (props) => {
    const {
        data,
        isNew,
        folderId,
        readOnly,
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

    if (readOnly) {
        return (
            <Details data={initialValues} />
        );
    }

    return (
        <Form initialValues={initialValues} />
    );
};

PresenterComponent.propTypes = {
    folderId: PropTypes.number.isRequired,
    isNew: PropTypes.bool,
    readOnly: PropTypes.bool,
};

PresenterComponent.defaultProps = {
    isNew: false,
    readOnly: false,
};

export default PresenterComponent;
