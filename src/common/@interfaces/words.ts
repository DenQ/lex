export type Word = {
  id?: number;
  folder_id: number;
  word_native: string;
  word_translation: string;
  number_of_attempts: number;
  number_of_wins: number;
}

export type Words = Word[];
