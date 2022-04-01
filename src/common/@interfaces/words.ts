export enum WordFields {
  Id = 'id',
  FolderId = 'folder_id',
  WordNative = 'word_native',
  WordTransaction = 'word_translation',
  NumberOfAttempt = 'number_of_attempts',
  NumberOfWins = 'number_of_wins'
};

export type Word = {
  [WordFields.Id]?: number;
  [WordFields.FolderId]: number;
  [WordFields.WordNative]: string;
  [WordFields.WordTransaction]: string;
  [WordFields.NumberOfAttempt]: number;
  [WordFields.NumberOfWins]: number;
};

export type Words = Word[];
