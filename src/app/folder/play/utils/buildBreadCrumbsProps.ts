import urlManager from '../../../../common/utils/url-manager';

export const buildBreadCrumbsProps = ({
  folderId,
  folderName,
}: {
  folderId: number;
  folderName: string;
}) => [
  {
    to: urlManager.home(),
    title: 'Home',
  },
  {
    to: urlManager.folder().show(folderId),
    title: `Folder (${folderName})`,
  },
  {
    to: undefined,
    title: 'Play',
  },
];
