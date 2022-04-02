export enum FolderFields {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  progress = 'progress'
}

export type Folder = {
  [FolderFields.Id]?: number;
  [FolderFields.Name]: string;
  [FolderFields.Description]?: string;
  [FolderFields.progress]?: number;
};

// TODO: Need to remove this type anywhere
export type Folders = Folder[];

// For API
type MetaFolder = {
  lastId?: number;
};

// For API
export type EjectFolder = {
  list: Folder[];
  meta: MetaFolder;
};
