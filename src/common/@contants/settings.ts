import { Settings, SettingsFields } from '../@interfaces/settings';

export const defaultSettings = {
	[SettingsFields.PlayMaxCountWins]: 2,
	[SettingsFields.PlayCountWords]: 10,
} as Settings;
