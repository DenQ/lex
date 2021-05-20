import React, { useCallback, useEffect, useState } from 'react';
import { preparePayload } from 'common/utils/settings/utils';
import { fetchSettings } from 'api/settings';
import { ISettings, SettingsContext } from 'common/contexts/settings';

type Props = {};

export const SettingsProvider: React.FC<Props> = ({ children }) => {
	const [settingsValue, setSettingsValue] = useState<ISettings>({
		settings: {},
		actions: {
			reload: () => null,
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
					...settingsValue.actions,
					reload: () => {
						reload();
						return null;
					},
				},
			});
		});
	};

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		fetchData();
	}, [needReload]);
	/* eslint-enable react-hooks/exhaustive-deps */

	return (
		<>
			<SettingsContext.Provider value={settingsValue}>
				{children}
			</SettingsContext.Provider>
		</>
	);
};
