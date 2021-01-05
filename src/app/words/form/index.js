import React from 'react';
import { Form } from 'react-final-form'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import RefreshContext from 'common/contexts/refetch-context';

import { submitHandler } from './utils';
import { fieldNames } from './constants';
import InputControl from './components/input-control';


const initialValues = {
	[fieldNames.ID]: null,
	[fieldNames.FOLDER_ID]: null,
	[fieldNames.WORD_NATIVE]: '',
	[fieldNames.WORD_TRANSLATION]: '',
};

const useStyles = makeStyles({
	id: {
		display: 'none',
	}
});

const EntityForm = ({
	initialValues,
	readOnly,
	handleRemove,
}) => {
	const classes = useStyles();
	const {
		wordsReload,
		setWordsReload,
	} = React.useContext(RefreshContext);
	const validate = () => { };

	const onSuccessSubmit = ({ form }) => {
		console.log('success', form);
		setTimeout(() => {
			form.reset();
			setWordsReload(wordsReload + 1);
		}, 0);
	};
	const onClickRemove = () => {
		const id = initialValues[fieldNames.ID];
		handleRemove({ id });
	};
    /* eslint-disable react-hooks/exhaustive-deps */
	const isCanRemove = React.useMemo(() => {
		return !!initialValues[fieldNames.ID];
	}, [initialValues[fieldNames.ID]]);
    /* eslint-enable react-hooks/exhaustive-deps */

	return (
		<Form
			onSubmit={submitHandler({ onSuccessSubmit })}
			validate={validate}
			initialValues={initialValues}
			render={({ handleSubmit, dirty }) => (
				<form onSubmit={handleSubmit}>
					<Grid container spacing={5}>

						<Grid item>

							<div className={classes.id}>
								<label>ID</label>
								<InputControl fieldName={fieldNames.ID} placeholder="NEW" readOnly disabled />
							</div>

							<div className={classes.id}>
								<label>Folder ID</label>
								<InputControl fieldName={fieldNames.FOLDER_ID} placeholder="NEW" readOnly />
							</div>
						</Grid>

						<Grid item xs={3}>
							<InputControl fieldName={fieldNames.WORD_NATIVE} placeholder="Native" readOnly={readOnly} />
						</Grid>

						<Grid item xs={3}>
							<InputControl fieldName={fieldNames.WORD_TRANSLATION} placeholder="Translation" readOnly={readOnly} />
						</Grid>

						<Grid item xs={1}>
							<Button type="submit" color="primary" disabled={!dirty}>Save</Button>
						</Grid>

						{isCanRemove && (
							<Grid item xs={1}>
								<Button type="button" color="secondary" onClick={onClickRemove} >Remove</Button>
							</Grid>
						)}
					</Grid>
				</form>
			)}
		/>
	);
}


EntityForm.propTypes = {
	initialValues: PropTypes.shape({
		[fieldNames.ID]: PropTypes.number,
		[fieldNames.FOLDER_ID]: PropTypes.number,
		[fieldNames.WORD_NATIVE]: PropTypes.string,
		[fieldNames.WORD_TRANSLATION]: PropTypes.string,
	}),
	readOnly: PropTypes.bool,
    handleRemove: PropTypes.func,
};

EntityForm.defaultProps = {
	initialValues,
	readOnly: false,
};

export default EntityForm;