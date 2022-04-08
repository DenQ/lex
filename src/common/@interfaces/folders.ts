import { Word } from './words';

export enum FolderFields {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Progress = 'progress',
  Words = 'words'
}

export type Folder = {
  [FolderFields.Id]?: number;
  [FolderFields.Name]: string;
  [FolderFields.Description]?: string;
  [FolderFields.Progress]?: number;
  [FolderFields.Words]?: Word[];
};

type MetaFolder = {
  lastId?: number;
};

export type EjectFolder = {
  list: Folder[];
  meta: MetaFolder;
};
