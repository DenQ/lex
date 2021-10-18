import _ from 'lodash';

const findByKeyValue = <T>(collection: T[], key: string, value: string) =>
	collection.find((item: T): boolean => String(_.get(item, key)).toLowerCase() === value.toLowerCase());

export default findByKeyValue;
