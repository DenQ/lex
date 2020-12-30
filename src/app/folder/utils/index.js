import React from 'react';

import { findById } from 'api/folders'


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