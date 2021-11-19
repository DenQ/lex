import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text, { Props as TextProps } from './index';

export default {
	title: 'Lib/Text',
	component: Text,
	argTypes: {
		align: {
			name: 'Align',
			description: 'Align text',
			control: {
				type: 'select',
				options: ['center', 'inherit', 'justify', 'left', 'right'],
			},
		},
		variant: {
			name: 'Variant',
			description: 'Variant text',
			control: {
				type: 'select',
				options: [
					'body1',
					'body2',
					'button',
					'caption',
					'h1',
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'inherit',
					'overline',
					'subtitle1',
					'subtitle2',
				],
			},
		},
	},
} as Meta;

const Template: Story<TextProps> = args => <Text {...args}>Text</Text>;

export const Default = Template.bind({});

Default.args = {
	align: 'left',
	variant: 'overline',
};
