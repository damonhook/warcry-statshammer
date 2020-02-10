import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const CorvusCabal: IWarband = {
  name: 'Corvus Cabal',
  alliance: 'Chaos',
  isAos: false,
  fighters: [
    {
      name: 'Shadow Piercer',
      profiles: [buildProfile(true, 1, 3, 3, 2, 5)],
    },
    {
      name: 'Shrike Talon',
      profiles: [buildProfile(true, 1, 5, 4, 2, 4)],
    },
    {
      name: 'Spire Stalker',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Cabalist',
      profiles: [buildProfile(true, 1, 4, 3, 1, 3)],
    },
    {
      name: 'Cabalist (Familiar)',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Cabalist (Spear)',
      profiles: [buildProfile(true, 2, 4, 3, 1, 4)],
    },
  ],
};

export default CorvusCabal;
