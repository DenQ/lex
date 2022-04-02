export enum SettingsFields {
  PlayCountWords = 'play_count_words',
  PlayMaxCountWins = 'play_max_count_wins'
}

export type Settings = {
  [SettingsFields.PlayCountWords]: number;
  [SettingsFields.PlayMaxCountWins]: number;
};

type MetaSettings = {};

export type EjectSettings = {
  payload: Settings;
  meta: MetaSettings;
};
