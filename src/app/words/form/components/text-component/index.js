import React from 'react';
import PropTypes from 'prop-types';


const TextComponent = (props) => {
    const {
        input:{
            value,
        },
    } = props;
    return (
        <span>
            : {value}
        </span>
    );
}

TextComponent.propTypes = {
    readOnly: PropTypes.bool,
};

TextComponent.defaultProps = {
    readOnly: false,
};

export default TextComponent;
