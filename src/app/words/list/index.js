import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { findAll, removeById } from 'api/words';
import RefreshContext from 'common/contexts/refetch-context';

import PresenterWord from '../presenter';
import { fieldNames } from '../form/constants';

const Component = ({
    folderId,
    readOnly,
}) => {
    const { wordsReload } = React.useContext(RefreshContext);
    const [list, setList] = React.useState([]);
    const [needRefresh, setNeedRefresh] = React.useState(null);

    React.useEffect(() => {
        const criteria = (item) => Number(item[fieldNames.FOLDER_ID]) === Number(folderId);
        findAll({ criteria }).then((results) => {
            setList(results);
        });
    }, [folderId, wordsReload, needRefresh]);

    const isShowListHeader = React.useMemo(() => {
        return(list.length > 0 && !readOnly) || list.length > 0;
    }, [readOnly, list.length]);

    const handleRemove = ({ id }) => {
        removeById({ id })
            .then(() => {
                setNeedRefresh(+new Date());
            })
            .catch((e) => {
                console.log('Error', e);
            });
    };

    return (
        <Box m={2}>
            {isShowListHeader && (
                <Typography variant="button">
                    List words
                </Typography>
            )}
            <List>
                {!readOnly && (
                    <PresenterWord folderId={folderId} isNew />
                )}
                {list.map((item) => {
                    return (
                        <PresenterWord folderId={folderId} data={item} key={item.id} readOnly={readOnly} handleRemove={handleRemove} />
                    );
                })}
            </List>
        </Box>
    );
};

Component.propTypes = {
    folderId: PropTypes.number.isRequired,
    readOnly: PropTypes.bool,
};

Component.defaultProps = {
    readOnly: false,
};

export default Component;
