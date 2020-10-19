import React from 'react';
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import urlManager from 'common/utils/url-manager';
import InputControl from 'app/words/form/components/input-control';

import { submitHandler } from './utils';
import { fieldNames } from './constants';


const initialValues = {
	[fieldNames.ID]: null,
	[fieldNames.NAME]: '',
	[fieldNames.DESCRIPTION]: '',
};

const useStyles = makeStyles({
	id: {
		display: 'none',
	}
});

const EntityForm = ({
	initialValues,
	readOnly,
}) => {
	const classes = useStyles();
	const history = useHistory();
	const validate = () => { };

	const onSuccessSubmit = () => {
		history.push(urlManager.folders());
	}

	return (
		<Form
			onSubmit={submitHandler({ onSuccessSubmit })}
			validate={validate}
			initialValues={initialValues}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Grid container spacing={5}>
						<Grid item>
							<div className={classes.id}>
								<InputControl fieldName={fieldNames.ID} placeholder="NEW" readOnly={readOnly} disabled />
							</div>
						</Grid>

						<Grid item xs={3}>
							<InputControl fieldName={fieldNames.NAME} placeholder="Folder Name" readOnly={readOnly} />
						</Grid>

						<Grid item xs={3}>
							<InputControl fieldName={fieldNames.DESCRIPTION} placeholder="Description" readOnly={readOnly} />
						</Grid>

						<Grid item>
							{!readOnly && (
								<Button type="submit" color="primary">Save</Button>
							)}
						</Grid>
					</Grid>
				</form >
			)}
		/>
	);
}


EntityForm.propTypes = {
	initialValues: PropTypes.shape({
		id: null,
		name: PropTypes.string,
		description: PropTypes.string,
	}),
	readOnly: PropTypes.bool,
};

EntityForm.defaultProps = {
	initialValues,
	readOnly: false,
};

export default EntityForm;