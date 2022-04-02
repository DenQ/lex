import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { EventHandler } from 'common/@types/general';
import urlManager from 'common/utils/url-manager';

const useAddEventHandler = (): EventHandler => {
  const history = useHistory();

  return useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const url = urlManager.folder().add();

      history.push(url);
    },
    [history]
  );
};

export default useAddEventHandler;
