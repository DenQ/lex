import React, { useEffect, useMemo, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

import { fetchSettings /* , updateSettings */ } from 'api/settings';
import { BaseForm } from 'lib/form/base-form';
import { TextField } from 'lib/form/text-field';

import { FormFooter } from './components/footer';
import validationSchema from './validation-schema';
import { fieldLabels, fieldNames, initialValues } from './constants';
// import { getInitialize } from './utils'
// import Slider from '@material-ui/core/Slider';

// import urlManager from 'common/utils/url-manager';

// const useStyles = makeStyles({
// 	root: {
// 		width: 300,
// 	},
// });

type Props = {};

const SettingsForm: React.FC<Props> = () => {
	// const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [settings, setSettings] = useState({});

	useEffect(() => {
		setLoading(true);
		fetchSettings().then(payload => {
			setTimeout(() => {
				setSettings(payload);
				setLoading(false);
			}, 1000);
		});
	}, []);

	const initValues = useMemo(() => ({
			...initialValues,
			...settings,
		}), [settings]);

	const onSuccessSubmit = (a: any): void => {
		// updateSettings()
		console.log('submit', a);
	};

	if (loading) {
		return <>loading...</>;
	}

	return (
		<BaseForm
			onSubmit={onSuccessSubmit}
			initialValues={initValues}
			validationSchema={validationSchema}
			Footer={FormFooter}
		>
			<Grid container>
				<Grid item xs={12}>
					<TextField
						name={fieldNames.PLAY_COUNT_WORDS}
						label={fieldLabels.PLAY_COUNT_WORDS}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						name={fieldNames.PLAY_MAX_COUNT_WINS}
						label={fieldLabels.PLAY_MAX_COUNT_WINS}
					/>
				</Grid>
			</Grid>
		</BaseForm>
	);
};

export default SettingsForm;
