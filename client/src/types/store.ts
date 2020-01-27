import { IFighter } from './fighter';

export type TFightersStore = IFighter[];

export interface IConfigStore {
  /** Whether the app is in dark mode or not */
  darkMode: boolean;
}

export interface IStore {
  fighters: TFightersStore;
  config: IConfigStore;
}
