import React from 'react';
import { Story, Meta } from '@storybook/react';

import TableComponent, { Props as TableProps } from './index';

export default {
	title: 'Lib/Tables/General',
	component: TableComponent,
	argTypes: {
		pageSize: {
			pageSize: 'Page Size',
		}
	// 	align: {
	// 		name: 'Align',
	// 		description: 'Align text',
	// 		control: {
	// 			type: 'select',
	// 			options: ['center', 'inherit', 'justify', 'left', 'right'],
	// 		},
	// 	},
	},
} as Meta;

const Template: Story<TableProps> = args => <TableComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
	pageSize: 5
};
