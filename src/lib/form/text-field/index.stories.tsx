import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BaseForm } from 'lib/form/base-form';
import { TextField, Props as TextFieldProps } from './index';

export type OnSubmitType = (params: object) => void;

export default {
	title: 'Lib/Form/Text Field',
	component: TextField,
	argTypes: {},
} as Meta;

const initValues = {
	fullName: 'Hello',
};

const onSubmit: OnSubmitType = (params: object) => {
	console.log('Submit...', params);
};

const Template: Story<TextFieldProps> = args => (
	<BaseForm onSubmit={onSubmit} initialValues={initValues} debug>
		<TextField {...args} />
	</BaseForm>
);

export const Default = Template.bind({});
Default.args = {
	name: 'fullName',
	label: 'Full Name',
	placeholder: 'Type...',
};
