import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextField, showErrorOnBlur } from 'mui-rff';
import * as Yup from 'yup';

import { BaseForm, Props as BaseFormProps } from './index';

const FIELD_NAME = 'some';

export default {
	title: 'Lib/Form/Base Form',
	component: BaseForm,
	argTypes: {},
} as Meta;

const validationSchema = Yup.object().shape({
	[FIELD_NAME]: Yup.string().required('Is Required'),
});

const Template: Story<BaseFormProps> = args => (
	<BaseForm {...args}>
		<TextField name={FIELD_NAME} showError={showErrorOnBlur} />
	</BaseForm>
);

export const Default = Template.bind({});
Default.args = {
	validationSchema,
	onSubmit: e => {
		e.preventDefault();
		console.log(777);
	},
};
