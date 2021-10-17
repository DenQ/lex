import _ from 'lodash';
import findByKeyValue from 'common/utils/find-by-key-value';
import { WordItemDTO } from 'common/@types/words';

const hasNotUnique = (words: Array<WordItemDTO>, values: WordItemDTO) => (key: string)=> {
	const value = _.get(values, key);
	const targetEntity = findByKeyValue<WordItemDTO>(
		words,
		key,
		value
	);

	return targetEntity && Number(targetEntity.id) !== Number(values.id);
};

export default hasNotUnique;
