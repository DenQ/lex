import React from 'react';
import { Story, Meta } from '@storybook/react';
import MailIcon from '@material-ui/icons/Mail';

import { Tooltip, Props as TooltipProps } from './index';

export default {
	title: 'Lib/Tooltip',
	component: Tooltip,
	argTypes: {
	},
} as Meta;

const Template: Story<TooltipProps> = args => (
	<Tooltip {...args}>
		<MailIcon />
	</Tooltip>
);

export const Default = Template.bind({});
Default.args = {
	value: "Your hint",
};

