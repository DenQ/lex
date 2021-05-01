import React from 'react';
import { Form } from 'react-final-form';
// import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';

// import urlManager from 'common/utils/url-manager';
// import InputControl from 'app/words/form/components/input-control';

// import { submitHandler } from './utils';
// import { fieldNames } from './constants';

// const initialValues = {
// 	[fieldNames.ID]: null,
// 	[fieldNames.NAME]: '',
// 	[fieldNames.DESCRIPTION]: '',
// };

// const useStyles = makeStyles({
// 	root: {
// 		width: 300,
// 	},
// });


type Props = {
};

const SettingsForm: React.FC<Props> = () => {
	// const classes = useStyles();
	// const history = useHistory();
	// const validate = () => {};

	const onSuccessSubmit = () => {
		console.log('submit');
		// history.push(urlManager.folders());
	};
	// function valuetext(value: number) {
	// 	return `${value}°C`;
	// }

	return (
		<Form
			onSubmit={onSuccessSubmit}
			// validate={validate}
			// initialValues={initialValues}
			render={({ handleSubmit, dirty }) => (
				<form onSubmit={handleSubmit}>
					<Grid container spacing={5}>
						{/*	<Grid item> */}
						{/*		<div className={classes.id}> */}
						{/*			<InputControl */}
						{/*				fieldName={fieldNames.ID} */}
						{/*				placeholder="NEW" */}
						{/*				readOnly={readOnly} */}
						{/*				disabled */}
						{/*			/> */}
						{/*		</div> */}
						{/*	</Grid> */}

						{/* <Grid item xs={3}> */}
						{/*	<InputControl */}
						{/*		fieldName={fieldNames.NAME} */}
						{/*		placeholder="Folder Name" */}
						{/*		readOnly={readOnly} */}
						{/*	/> */}
						{/* </Grid> */}

						 {/* <Grid item xs={2}> */}
							{/* <InputControl */}
							{/*	fieldName="" */}
							{/*	placeholder="Description" */}
							{/* /> */}
							{/* <Slider */}
							{/*	 defaultValue={30} */}
							{/*	 getAriaValueText={valuetext} */}
							{/*	 aria-labelledby="discrete-slider" */}
							{/*	 valueLabelDisplay="auto" */}
							{/*	 step={10} */}
							{/*	 marks */}
							{/*	 min={10} */}
							{/*	 max={110} */}
							{/* /> */}
						 {/* </Grid> */}

						 <Grid item>
							<Button type="submit" color="primary" disabled={!dirty}>
								Save
							</Button>
						 </Grid>
					</Grid>
				</form>
			)}
		/>
	)
};

export default SettingsForm;

