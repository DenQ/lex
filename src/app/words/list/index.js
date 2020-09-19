import React from 'react';
import PropTypes from 'prop-types';

import { findAll } from 'api/words';
import PresenterWord from '../presenter';
import { fieldNames } from '../form/constants';

const Component = ({
    folderId,
}) => {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        const criteria = (item) => Number(item[fieldNames.FOLDER_ID]) === Number(folderId);
        findAll({ criteria }).then((results) => {
            setList(results);
        });
    }, [folderId, list]);

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
