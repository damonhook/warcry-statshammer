import { IFighter } from './fighter';
import { TResults } from './stats';

export type TFightersStore = IFighter[];

export interface IConfigStore {
  /** Whether the app is in dark mode or not */
  darkMode: boolean;
}

export interface IStatsStore {
  pending: boolean;
  results: TResults;
  error: boolean;
}

export interface IStore {
  fighters: TFightersStore;
  config: IConfigStore;
  stats: IStatsStore;
}
