import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProgressLabelProps } from './types';
import ProgressLabel from './ProgressLabel';

export default {
	title: 'Lib/Progress/Label',
	component: ProgressLabel,
} as Meta;

const Template: Story<ProgressLabelProps> = args => <ProgressLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
	percentValue: 45,
	text: '45/100'
};
