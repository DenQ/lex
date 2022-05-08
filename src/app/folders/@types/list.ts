import { Folder } from 'common/@interfaces/folders';

export enum ActionName {
  edit = 'edit',
  play = 'play',
  remove = 'remove'
}

export enum ActionTitle {
  edit = 'Edit',
  play = 'Play',
  remove = 'Remove'
}


export type RemoveHandler = (folder: Folder) => void;
