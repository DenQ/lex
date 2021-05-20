import React, { useCallback, useEffect, useState } from 'react';
import { preparePayload } from 'common/utils/settings/utils';
import { fetchSettings } from 'api/settings';
import {
	ISettings,
	SettingsContext,
} from './common/contexts/settings';

type Props = {};

export const Providers: React.FC<Props> = ({ children }) => {
	// TODO: need to extract to common hooks
	const [settingsValue, setSettingsValue] = useState<ISettings>({
		settings: {},
		actions: {
			update: () => null,
		},
	});
	const [needReload, setNeedReload] = useState(+new Date());
	const reload = useCallback(() => {
		setNeedReload(+new Date());
	}, []);
	const fetchData = () => {
		fetchSettings().then(response => {
			setSettingsValue({
				...settingsValue,
				settings: preparePayload(response),
				actions: {
					update: payload => {
						reload();
						return null;
					},
				},
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, [needReload]);

	return (
		<>
			<SettingsContext.Provider value={settingsValue}>
				{children}
			</SettingsContext.Provider>
		</>
	);
};

export default Providers;
