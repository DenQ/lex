import { useCallback, useState } from 'react';

export type OnConfirmationType = (params: { reset: () => void }) => void;

interface Input {
	onConfirmation: OnConfirmationType;
}

interface Output {
	open: boolean;
	toOpen: () => void;
	onYes: () => void;
	onCancel: () => void;
}

export const useConfirmationModal = ({ onConfirmation }: Input): Output => {
	const [open, setOpen] = useState<boolean>(false);
	const reset = useCallback(() => {
		setOpen(false);
	}, []);
	const toOpen = useCallback(() => {
		setOpen(true);
	}, []);
	const onYes = useCallback(() => {
		onConfirmation({
			reset,
		});
	}, [onConfirmation, reset]);
	const onCancel = useCallback(() => {
		reset();
	}, [reset]);

	return {
		open,
		toOpen,
		onYes,
		onCancel,
	};
};
