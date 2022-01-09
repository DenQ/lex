import { Folder } from 'common/@interfaces/folders';

export enum ActionName {
  edit = 'edit',
  play = 'play',
  remove = 'remove'
}


export type RemoveHandler = (folder: Folder) => void;
