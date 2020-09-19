import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form'

import TextComponent from '../text-component';


const Component = ({
    disabled,
    fieldName,
    readOnly,
    placeholder
}) => {
    const Component = readOnly ? TextComponent : 'input';

    return (
        <Field
            name={fieldName}
            component={Component}
            placeholder={placeholder}
            disabled={disabled}
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
