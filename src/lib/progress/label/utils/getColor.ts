import { ProgressGrade } from '../types';

export const getColor = (value: number) => {
	if (value < ProgressGrade.first) return 'default';
	if (value < ProgressGrade.second) return 'secondary';

	return 'primary';
};
