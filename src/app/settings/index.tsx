import React from 'react';
import Grid from '@material-ui/core/Grid';
import GeneralLayout from '../system/layout';
import SettingsForm from './form';
import { Header } from './components/header';
import { buildBreadCrumbs } from './utils';

type Props = {};

const SettingsPage: React.FC<Props> = () => (
	<GeneralLayout title="Settings">
		<Header breadCrumbs={buildBreadCrumbs()} />
		<Grid container justify="center" spacing={2}>
			<SettingsForm />
		</Grid>
	</GeneralLayout>
);

export default SettingsPage;
