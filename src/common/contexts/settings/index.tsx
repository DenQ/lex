import React, { useContext } from 'react';
import { defaultSettings } from 'common/@contants/settings';

export interface IKeyValue {
  [string: string]: string | number;
}

export interface ISettingsAction {
  reload: () => void;
}

export interface ISettings {
  settings: IKeyValue;
  actions: ISettingsAction;
}

const initialValues = {
  settings: defaultSettings,
  actions: {
    reload: () => null,
  },
};

export const SettingsContext = React.createContext<ISettings>({
  ...initialValues,
});

export const useSettings = (): ISettings => useContext(SettingsContext);
