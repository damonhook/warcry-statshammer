import { IFighter, IFighterProbability } from 'api/types';

export interface ICompareFightersParams {
  fighters: IFighter[];
  toughness: {
    min?: number | 'auto';
    max?: number | 'auto';
  };
}

export type TMappedResult = {
  toughness: number;
  results: {
    [name: string]: IFighterProbability;
  };
};

export type TMappedProbabilities = {
  [damage: number]: {
    [name: string]: number;
  };
};

export type TProbabilityResult = {
  damage: number;
  [name: string]: number;
};

export type TMetric = { [name: string]: number };
export type TMetrics = { [metric: string]: TMetric };

export type ICompareFightersResult = {
  toughness: string | number;
  discrete: TProbabilityResult[];
  cumulative: TProbabilityResult[];
  inverse: TProbabilityResult[];
  metrics: TMetrics;
};
export interface ICompareFightersResponse {
  results: ICompareFightersResult[];
}
