export interface IDamage {
  hit: number;
  crit: number;
}

export interface ITarget {
  toughness: number;
}

export interface IProfile {
  attacks: number;
  strength: number;
  damage: IDamage;
}

export interface IFighter {
  name: string;
  profile: IProfile;
}

export type TVector = number[];
export type TMatrix = TVector[];

export interface IFighterProbability {
  buckets: {
    damage: number;
    count: number;
    probability: number;
  }[];
  metrics: {
    max: number;
    mean: number;
  };
}
