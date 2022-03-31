export enum ProgressGrade {
  first = 50,
  second = 80
}

export type ProgressLabelProps = {
  percentValue: number;
  text: string;
  variant?: 'outlined' | 'filled';
  size?: 'medium' | 'small';
};
