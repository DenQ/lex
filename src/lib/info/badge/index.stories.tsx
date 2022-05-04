import React from 'react';
import { Story, Meta } from '@storybook/react';
import MailIcon from '@material-ui/icons/Mail';

import { Badge, Props as BadgeProps } from './index';

export default {
  title: 'Lib/info/Badge',
  component: Badge,
  argTypes: {
    color: {
      name: 'Color',
      description: 'Available options available to the Badge',
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'error'],
      },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = args => (
  <Badge {...args}>
    <MailIcon />
  </Badge>
);

export const Default = Template.bind({});
Default.args = {
  color: 'secondary',
  value: 1,
};
