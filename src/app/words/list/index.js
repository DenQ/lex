import React from 'react';
import PropTypes from 'prop-types';

import PresenterWord from '../presenter';
import { fieldNames } from '../form/constants';

const list = [
    {
        [fieldNames.ID]: 1,
        [fieldNames.FOLDER_ID]: 2,
        [fieldNames.WORD_NATIVE]: 'xxx',
        [fieldNames.WORD_TRANSLATION]: 'yyy',
    },
];

const Component = ({
    folderId,
}) => {
    return (
        <>
            <div>
                List words for {folderId}
            </div>
            <div>
                <PresenterWord folderId={folderId} isNew />
                {list.map((item) => {
                    return (
                        <PresenterWord folderId={folderId} data={item} key={item.id} />
                    );
                })}
            </div>
        </>
    );
};

Component.propTypes = {
    folderId: PropTypes.number.isRequired,
};

Component.defaultProps = {
};

export default Component;
