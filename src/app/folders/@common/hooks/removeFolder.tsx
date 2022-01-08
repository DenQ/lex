import { useState } from 'react';
import { Folder } from 'common/@interfaces/folders';
import { removeById } from 'api/folders';
import { removeByFolderId } from 'api/words';

type Input = {
  afterSuccessHandler: () => void;
};

type Output = {
  confirmYes: () => Promise<any>;
  confirmNo: () => Promise<any>;
  removeCandidate: Folder | null;
  setRemoveCandidate: (item: Folder | null) => void;
};

export const useRemoveFolder = ({ afterSuccessHandler }: Input): Output => {
  const [removeCandidate, setRemoveCandidate] = useState<Folder | null>(null);

  const confirmYes = async () => {
    if (!removeCandidate) return Promise.resolve();

    try {
      const { id } = removeCandidate;

      return await removeById({ id })
        .then(r => removeByFolderId({ folderId: id }))
        .then(() => {
          setRemoveCandidate(null);
          afterSuccessHandler();
        });
    } catch (error) {
      // TODO: Here need show notify
      console.error(error);
    } finally {
      // TODO: Here need show notify
    }
    return Promise.resolve();
  };

  const confirmNo = () =>
    Promise.resolve().then(() => {
      setRemoveCandidate(null);
    });

  return {
    confirmYes,
    confirmNo,
    removeCandidate,
    setRemoveCandidate,
  };
};

export default useRemoveFolder;
