import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const IronGolems: IWarband = {
  name: 'Iron Golems',
  alliance: 'Chaos',
  isAos: false,
  fighters: [
    {
      name: 'Dominar',
      profiles: [buildProfile(true, 1, 2, 5, 2, 5)],
    },
    {
      name: 'Ogre Breacher',
      profiles: [buildProfile(true, 1, 2, 6, 4, 8)],
    },
    {
      name: 'Signifer',
      profiles: [buildProfile(true, 1, 3, 4, 2, 4)],
    },
    {
      name: 'Drillmaster',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4), buildProfile(false, 3, 4, 4, 1, 2)],
    },
    {
      name: 'Prefector',
      profiles: [buildProfile(true, 1, 3, 4, 2, 5)],
    },
    {
      name: 'Armator',
      profiles: [buildProfile(true, 1, 4, 4, 1, 4)],
    },
    {
      name: 'Iron Legionary',
      profiles: [buildProfile(true, 1, 2, 3, 1, 3)],
    },
    {
      name: 'Iron Legionary (Twin Hammers)',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Iron Legionary (Bolas)',
      profiles: [buildProfile(false, 3, 3, 3, 1, 2), buildProfile(true, 1, 2, 3, 1, 3)],
    },
  ],
};

export default IronGolems;
