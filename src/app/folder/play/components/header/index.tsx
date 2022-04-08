import React from 'react';
import Box from '@material-ui/core/Box';

import BreadCrumbs from 'common/components/bread-crumbs';
import ActionBar from 'lib/ActionBar';

import { buildBreadCrumbsProps } from '../../../utils';

type Props = {
  name: string;
};

const HeaderPlayFolder: React.FC<Props> = ({ name }) => {
  const breadcrumbsProps = buildBreadCrumbsProps({
    folderName: name,
    actionName: 'Play',
  });

  return (
    <>
      <ActionBar title="Play Folder" />
      <Box m={2}>
        <BreadCrumbs data={breadcrumbsProps} />
      </Box>
    </>
  );
};

export default HeaderPlayFolder;
