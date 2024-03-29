import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { findById } from 'api/folders';
import urlManager from 'common/utils/url-manager';
import { Folder } from 'common/@interfaces/folders';

export const useFindById = ({
  match: {
    params: { id },
  },
}: RouteComponentProps): {
  id: number;
  entity: Folder | null;
} => {
  const [entity, setEntity] = useState<Folder | null>(null);

  useEffect(() => {
    findById({ id }).then(modelResult => {
      setEntity(modelResult || null);
    });
  }, [id]);

  return {
    entity,
    id: Number(id),
  };
};

export const buildBreadCrumbsProps = ({
  folderName,
  actionName,
}: {
  folderName: string;
  actionName: string;
}) => [
  {
    to: urlManager.home(),
    title: 'Home',
  },
  {
    to: undefined,
    title: folderName ? `Folder (${folderName})` : 'Folder',
  },
  {
    to: undefined,
    title: actionName,
  },
];
