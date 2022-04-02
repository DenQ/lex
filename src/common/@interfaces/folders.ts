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

export type Folders = Folder[];
