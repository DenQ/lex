import urlManager from 'common/utils/url-manager';

type Input = {
  folderId: number;
  folderName: string;
};

const buildBreadCrumbsProps = ({ folderId, folderName }: Input) => [
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

export default buildBreadCrumbsProps;
