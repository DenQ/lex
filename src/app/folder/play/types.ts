import { Word } from 'common/@interfaces/words';

export type RestartFolderHandler = () => void;

export type SelectWordHandler = ({
  targetWord,
  selectedWord,
}: {
  targetWord: Word;
  selectedWord: Word;
}) => void;
