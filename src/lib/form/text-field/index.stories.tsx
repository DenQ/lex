import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Form } from 'react-final-form';

import { TextField, Props as TextFieldProps } from './index';

export default {
	title: 'Lib/Form/Text Field',
	component: TextField,
	argTypes: {},
} as Meta;

const validate = () => ({
	full_name: 'error',
});
const onSubmit = (e) => {
	e.preventDefault();
	console.log(444);
}

const Template: Story<TextFieldProps> = args => (
	<Form
		validate={validate}
		initialValues={{
			[args.name]: 'Hello',
		}}
		onSubmit={() => {}}
		render={props => (
			<form onSubmit={onSubmit} >
				<pre>{JSON.stringify(props, null, 2)}</pre>
				<TextField {...args} />
				<button type="submit">Submit</button>
			</form>
		)}
	/>
);

export const Default = Template.bind({});
Default.args = {
	name: 'full_name',
	label: 'Full Name',
	placeholder: 'Type...',
};
