import { IProfile } from 'types/fighter';

export const buildProfile = (
  active: boolean,
  range: number | string,
  attacks: number,
  strength: number,
  hit: number,
  crit: number,
): IProfile => ({
  active,
  range,
  attacks,
  strength,
  damage: { hit, crit },
});
