import { useCallback, useState } from 'react';
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

const useRemoveFolder = ({ afterSuccessHandler }: Input): Output => {
  const [removeCandidate, setRemoveCandidate] = useState<Folder | null>(null);

  const confirmYes = useCallback(async () => {
    if (!removeCandidate) return Promise.resolve();

    try {
      const { id } = removeCandidate;

      if (!id) {
        throw new Error('Id not defined');
      }

      return await removeById({ id })
        .then(r => removeByFolderId({ folderId: id }))
        .then(() => {
          setRemoveCandidate(null);
          afterSuccessHandler();
        });
    } catch (error) {
      // TODO: Here need to show notify
      // See: https://github.com/DenQ/lex/issues/79
      console.error(error);
    } finally {
      // TODO: Here need to show notify
      // See: https://github.com/DenQ/lex/issues/79
    }

    return Promise.resolve();
  }, [afterSuccessHandler, removeCandidate]);

  const confirmNo = useCallback(
    () =>
      Promise.resolve().then(() => {
        setRemoveCandidate(null);
      }),
    []
  );

  return {
    confirmYes,
    confirmNo,
    removeCandidate,
    setRemoveCandidate,
  };
};

export default useRemoveFolder;
