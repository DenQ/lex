import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react';
import MailIcon from '@material-ui/icons/Mail';

import { Badge, Props as BadgeProps } from './index';

export default {
	title: 'Lib/Badge',
	component: Badge,
	argTypes: {
		color: {
			name: 'Color',
			description: 'Available options available to the Badge',
			control: {
				type: 'select',
				options: [
					'default',
					'primary',
					'secondary',
					'error',
				],
			},
		}
	},
} as Meta;

const Template: Story<BadgeProps> = args => (
	<Badge {...args}>
		<MailIcon />
	</Badge>
);

export const Primary = Template.bind({});
Primary.args = {
	color: 'secondary',
	value: 1,
};

