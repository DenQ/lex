import React from 'react';
import PropTypes from 'prop-types';

import { findAll } from 'api/words';
import RefreshContext from 'common/contexts/refetch-context';

import PresenterWord from '../presenter';
import { fieldNames } from '../form/constants';

const Component = ({
    folderId,
}) => {
    const { wordsReload } = React.useContext(RefreshContext);
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        const criteria = (item) => Number(item[fieldNames.FOLDER_ID]) === Number(folderId);
        findAll({ criteria }).then((results) => {
            setList(results);
        });
    }, [folderId, wordsReload]);

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
