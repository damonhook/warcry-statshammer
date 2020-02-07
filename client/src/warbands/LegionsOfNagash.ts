import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const LegionsOfNagash: IWarband = {
  name: 'Legions of Nagash',
  alliance: 'Death',
  isAos: true,
  fighters: [
    {
      name: 'Grave Guard (Greatblade)',
      profiles: [buildProfile(true, 1, 3, 5, 2, 5)],
    },
    {
      name: 'Grave Guard (Blade & Shield)',
      profiles: [buildProfile(true, 1, 3, 4, 2, 4)],
    },
    {
      name: 'Seneschal',
      profiles: [buildProfile(true, 1, 4, 5, 2, 5)],
    },
    {
      name: 'Skeleton Warrior (Blade)',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Skeleton Warrior (Spear)',
      profiles: [buildProfile(true, 2, 2, 3, 1, 4)],
    },
    {
      name: 'Skeleton Champion',
      profiles: [buildProfile(true, 1, 4, 3, 1, 3)],
    },
    {
      name: 'Necromancer',
      profiles: [buildProfile(true, '3-7', 2, 3, 3, 6), buildProfile(false, 2, 3, 4, 1, 4)],
    },
  ],
};

export default LegionsOfNagash;
