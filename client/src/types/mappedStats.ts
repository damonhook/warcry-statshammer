import { TProbabilityResult } from './stats';

export type IAverageDamageData = { toughness: number; [name: string]: number }[];

export type IProbabilityData = {
  toughness: number;
  discrete: TProbabilityResult[];
  cumulative: TProbabilityResult[];
};
export type IProbabilitiesData = IProbabilityData[];
