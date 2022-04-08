import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@material-ui/core';

import ActionBar, { Props as ActionBarProps } from './index';

const btnAdd = (
  <Button onClick={() => {}} color="primary" variant="contained" size="small">
    Add Folder
  </Button>
);

export default {
  title: 'ActionBar',
  component: ActionBar,
  argTypes: {
    title: {
      name: 'title',
      description: 'Title page',
      type: 'string',
    },
  },
} as Meta;

const Template: Story<ActionBarProps> = args => <ActionBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Folders list',
  rightControls: [btnAdd],
};

export const ManyControls= Template.bind({});

ManyControls.args = {
  title: 'Folders list',
  rightControls: [btnAdd, btnAdd],
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
  title: 'Folders list',
};
