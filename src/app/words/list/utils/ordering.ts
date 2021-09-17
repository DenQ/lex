import _ from 'lodash';

import { WordItemDTO } from '../../../../common/@types/words';

type Input = {
	list: Array<WordItemDTO>;
}

type Output = Array<WordItemDTO>;

export const orderListByName = ({ list }: Input): Output => _.orderBy(list, ['word_native'], ['asc']);
