import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

import { BaseForm } from 'lib/form/base-form';
import { TextField } from 'lib/form/text-field';

import { FormFooter } from './components/footer';
import validationSchema from './validation-schema';
import { fieldLabels, fieldNames } from './constants';
import { changeSettings } from './utils';
import { useFetch } from './hooks/fetch';
import { useSettings } from '../../../common/contexts/settings';
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
	const { loading, initValues, reload } = useFetch();
	const { actions } = useSettings();

	const onSuccessSubmit = (a: any): void => {
		const { formProps } = a;

		changeSettings({
			afterSuccessSubmit: () => {
				reload();
				actions.reload();
			},
			afterErrorSubmit: () => {
				console.log('error');
			},
			payload: formProps.values,
		});
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
