import React from 'react';

import { findById } from 'api/folders'
import urlManager from 'common/utils/url-manager';


export const useFindById = (props) => {
    const {
        match: {
            params: {
                id,
            },
        },
    } = props;
    const [entity, setEntity] = React.useState(null);

    React.useEffect(() => {
        findById({ id }).then((modelResult) => {
            setEntity(modelResult)
        })
    }, [id]);

    return {
        entity,
        id: Number(id),
    };
};

export const buildBreadCrumbsProps = ({
   folderName,
   actionName,
}) => {
    return [
        {
            to: urlManager.home(),
            title: 'Home',
        },
        {
            to: undefined,
            title: folderName ? `Folder (${folderName})` : 'Folder',
        },
        {
            to: undefined,
            title: actionName
        }
    ];
};