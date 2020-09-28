import React from 'react';
import PropTypes from 'prop-types';


const TextComponent = (props) => {
    const {
        input:{
            value,
        },
        placeholder,
    } = props;
    return (
        <span>
            {placeholder} : {value}
        </span>
    );
}

TextComponent.propTypes = {
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
};

TextComponent.defaultProps = {
    readOnly: false,
};

export default TextComponent;
