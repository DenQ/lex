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

// TODO: Need to remove this type anywhere
export type Words = Word[];

// For API
type MetaWord = {
  lastId?: number; // ?
};

// For API
export type EjectWord = {
  list: Word[];
  meta: MetaWord;
};
