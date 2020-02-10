import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const FleshEaterCourts: IWarband = {
  name: 'Flesh Eater Courts',
  alliance: 'Death',
  isAos: true,
  fighters: [
    {
      name: 'Crypt Ghoul',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Crypt Ghast',
      profiles: [buildProfile(true, 1, 4, 3, 2, 4)],
    },
    {
      name: 'Crypt Horror',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Crypt Haunter',
      profiles: [buildProfile(true, 1, 5, 4, 2, 5)],
    },
    {
      name: 'Crypt Flayer',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Crypt Infernal',
      profiles: [buildProfile(true, 1, 5, 4, 2, 5)],
    },
  ],
};

export default FleshEaterCourts;
