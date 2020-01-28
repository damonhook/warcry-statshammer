export type TProbabilityResult = {
  damage: number;
  [name: string]: number;
};

export type TMetric = { [name: string]: number };
export type TMetrics = { [metric: string]: TMetric };

export type TResult = {
  toughness: number;
  discrete: TProbabilityResult[];
  cumulative: TProbabilityResult[];
  metrics: TMetrics;
};
export type TResults = TResult[];
