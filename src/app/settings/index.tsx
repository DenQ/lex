import React from 'react';
import Grid from '@material-ui/core/Grid';
import GeneralLayout from '../system/layout';
import SettingsForm from './form';

type Props = {
};

const SettingsPage: React.FC<Props> = () => (
	<GeneralLayout title="Folders" isHome>
		<Grid container justify="center" spacing={2}>
			<SettingsForm />
		</Grid>
	</GeneralLayout>
);

export default SettingsPage;
