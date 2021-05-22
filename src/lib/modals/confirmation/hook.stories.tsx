import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '@material-ui/core/Button';
import { ConfirmationModal, Props as ConfirmationModalProps } from './index';
import { useConfirmationModal, OnConfirmationType } from './hook';

export default {
	title: 'Lib/modals/confirmation/hook',
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
	const onConfirmation: OnConfirmationType  = ({ reset }) => {
		console.log('submit');
		reset();
	}
	const {
		onYes,
		onCancel,
		open,
		toOpen,
	} = useConfirmationModal({
		onConfirmation,
	});

	const onOpenClick = () => {
		toOpen();
	};
	const modalProps = {
		...args,
		open,
		onYes,
		onCancel,
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
