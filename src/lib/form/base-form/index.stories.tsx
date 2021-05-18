import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextField as MUITextField, showErrorOnChange } from 'mui-rff';
import * as Yup from 'yup';

import { BaseForm, Props as BaseFormProps } from './index';

const FIELD_NAME = 'some';
const FIELD_NAME1 = 'some1';

export default {
	title: 'Lib/Form/Base Form',
	component: BaseForm,
	argTypes: {},
} as Meta;

const validationSchema = Yup.object().shape({
	[FIELD_NAME]: Yup.string().required('Is Required'),
	[FIELD_NAME1]: Yup.string().required('Is Required'),
});

const Template: Story<BaseFormProps> = args => (
	<BaseForm {...args}>
		<MUITextField name={FIELD_NAME} showError={showErrorOnChange} />
		<MUITextField name={FIELD_NAME1} showError={showErrorOnChange} />
	</BaseForm>
);

export const Default = Template.bind({});
Default.args = {
	validationSchema,
	onSubmit: e => {
		// e.preventDefault();
		console.log(999, e);
	},
};
