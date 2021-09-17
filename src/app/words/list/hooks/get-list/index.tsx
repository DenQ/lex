import React, { useContext, useState } from 'react';

import { findAll } from 'api/words';
import RefreshContext from 'common/contexts/refetch-context';
import { WordItemDTO } from 'common/@types/words';

type K = () => boolean;

type Input = {
	folderId: number;
	needRefresh: string;
};

type Output = Array<WordItemDTO>;

export const useGetList = ({ folderId, needRefresh }: Input): Output => {
	const { wordsReload } = useContext(RefreshContext);
	const [list, setList] = useState<Array<WordItemDTO>>([]);

	React.useEffect(() => {
		const criteria = (item: WordItemDTO): boolean =>
			Number(item.folder_id) === Number(folderId);

		findAll({ criteria } as { criteria: K }).then(results => {
			setList(results);
		});
	}, [folderId, wordsReload, needRefresh]);

	return list;
};
