import React from 'react';
import Box from '@material-ui/core/Box';

import BreadCrumbs from 'common/components/bread-crumbs';
import { RestartFolderHandler } from 'app/folder/play/types';
import ActionBar from 'lib/ActionBar';

import Button from '@mui/material/Button';
import { buildBreadCrumbsProps } from '../../../utils';

type Props = {
  name: string;
  restartFolderHandler: RestartFolderHandler;
};

const HeaderPlayFolder: React.FC<Props> = ({ name, restartFolderHandler }) => {
  const breadcrumbsProps = buildBreadCrumbsProps({
    folderName: name,
    actionName: 'Play',
  });

  return (
    <>
      <ActionBar
        title="Play Folder"
        rightControls={[
          <Button
            color="secondary"
            size="small"
            onClick={restartFolderHandler}
            key="restart-folder"
          >
            Reset
          </Button>,
        ]}
      />
      <Box m={2}>
        <BreadCrumbs data={breadcrumbsProps} />
      </Box>
    </>
  );
};

export default HeaderPlayFolder;
