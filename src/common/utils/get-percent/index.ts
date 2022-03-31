const getPercent = (value1: number, value2: number, nominal = 100) =>
	(value1 * nominal) / value2;

export default getPercent;
