import React from 'react';
import { Story, Meta } from '@storybook/react';

import TableComponent, { Props as TableProps } from './index';
import getMockRows from './utsils/get-mock-rows';
import { getColumns } from './columns/columns-definitions';

export default {
  title: 'Lib/Tables/General',
  component: TableComponent,
  argTypes: {
    pageSize: {
      pageSize: 'Page Size',
    },
    headerColumnSimpleView: {
      name: 'headerColumnSimpleView',
      control: {
        type: 'boolean',
      },
    },
    checkboxSelectionMode: {
      name: 'checkboxSelectionMode',
      control: {
        type: 'boolean',
      },
    },
    density: {
      name: 'density',
      description: 'Density',
      control: {
        type: 'select',
        options: ['comfortable', 'compact', 'standard'],
      },
    },
  },
} as Meta;

const Template: Story<TableProps> = args => {
  const rows = getMockRows(100);
  const columns = getColumns();

  return <TableComponent {...args} rows={rows} columns={columns} />;
};

export const Default = Template.bind({});

Default.args = {
  pageSize: 5,
  density: 'standard',
  checkboxSelectionMode: false,
};
