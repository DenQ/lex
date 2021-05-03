import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextField, showErrorOnBlur } from 'mui-rff';
// import { makeValidate } from 'mui-rff';
// import * as Yup from 'yup';

import { BaseForm, Props as BaseFormProps } from './index';

export default {
	title: 'Lib/Form/Base Form',
	component: BaseForm,
	argTypes: {},
} as Meta;

const Template: Story<BaseFormProps> = args => (
	<BaseForm {...args}>
		<TextField name="some" showError={showErrorOnBlur} />
	</BaseForm>
);

export const Default = Template.bind({});
Default.args = {
	onSubmit: e => {
		e.preventDefault();
		console.log(777);
	},
};
