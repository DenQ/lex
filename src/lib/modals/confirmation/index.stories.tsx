import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '@material-ui/core/Button';
import { ConfirmationModal, Props as ConfirmationModalProps } from './index';

export default {
	title: 'Lib/modals/confirmation',
	component: ConfirmationModal,
	argTypes: {
		size: {
			name: 'size',
			description: 'Available options available to the Badge',
			control: {
				type: 'select',
				options: [
					'xl',
					'lg',
					'md',
					'sm',
					'xs',
					undefined
				],
			},
		}
	},
} as Meta;

const Template: Story<ConfirmationModalProps> = args => {
	const [open, setOpen] = useState<Boolean>(false);
	const onOpenClick = () => {
		setOpen(true);
	};
	const reset = () => {
		setOpen(false);
	};

	const modalProps = {
		...args,
		open,
		onCancel: reset,
		onYes: () => {
			console.log('Yes');
			reset();
		},
	} as ConfirmationModalProps;

	return (
		<>
			<Button onClick={onOpenClick} color="secondary">
				Remove Folder
			</Button>
			<ConfirmationModal {...modalProps} />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	open: false,
	title: 'Remove folder',
	message: 'Are you sure you want to delete the folder?',
};
