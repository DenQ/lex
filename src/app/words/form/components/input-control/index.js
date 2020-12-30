import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form'
import { TextField } from 'mui-rff';

import TextComponent from 'app/folder/form/components/text-component';


const Component = ({
    disabled,
    fieldName,
    readOnly,
    placeholder
}) => {
    if (!readOnly) {
        return (
            <TextField
                name={fieldName}
                label={placeholder}
                disabled={disabled}
                size="small"
            />
        );
    }

    return (
        <Field
            name={fieldName}
            component={TextComponent}
            placeholder={placeholder}
            disabled={disabled}
            label={placeholder}
        />
    );
};

Component.propTypes = {
    readOnly: PropTypes.bool,
};

Component.defaultProps = {
    readOnly: false,
};

export default Component;
