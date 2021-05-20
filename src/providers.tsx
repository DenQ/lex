import React, { useEffect, useState } from 'react';
import { IKeyValue, ISettings, ISettingsAction, SettingsContext } from './common/contexts/settings';
import { fetchSettings } from './api/settings';

type Props = {};

export const Providers: React.FC<Props> = ({ children }) => {
	// TODO: need to extract to common hooks
	const [settingsValue, setSettingsValue] = useState<ISettings>({
		settings: {},
		actions: {
			update: () => {
				console.log(333);
				return null;
			},
		},
	});

	useEffect(() => {
		fetchSettings().then(response => {
			setSettingsValue({
				settings: response,
				actions: {
					update: (payload) => {
						setSettingsValue({
							...settingsValue,
							settings: {
								...payload,
							},
						});
						return null;
					},
				},
			});
		});
	}, []);

	return (
		<>
			<SettingsContext.Provider value={settingsValue}>
				{children}
			</SettingsContext.Provider>
		</>
	);
};

export default Providers;
