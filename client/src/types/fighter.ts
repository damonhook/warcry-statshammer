export interface IDamage {
  hit: number;
  crit: number;
}

export interface IProfile {
  active: boolean;
  uuid?: string;
  range?: string | number;
  attacks: number;
  strength: number;
  damage: IDamage;
}

export interface IFighter {
  name: string;
  profiles: IProfile[];
  uuid?: string;
}
