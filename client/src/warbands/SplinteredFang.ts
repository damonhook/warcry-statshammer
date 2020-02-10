import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const SplinteredFang: IWarband = {
  name: 'Splintered Fang',
  alliance: 'Chaos',
  isAos: false,
  fighters: [
    {
      name: 'Trueblood',
      profiles: [buildProfile(true, 2, 4, 4, 2, 5)],
    },
    {
      name: 'Serpent Caller',
      profiles: [buildProfile(true, 2, 4, 4, 2, 4), buildProfile(false, 8, 1, 3, 1, 3)],
    },
    {
      name: 'Serpents',
      profiles: [buildProfile(true, 1, 5, 3, 1, 4)],
    },
    {
      name: 'Pureblood',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Venomblood (Whip)',
      profiles: [buildProfile(true, 3, 3, 4, 1, 2)],
    },
    {
      name: 'Venomblood (Spear & Shield)',
      profiles: [buildProfile(true, 2, 3, 4, 2, 4)],
    },
    {
      name: 'Venomblood (Duelling Blades)',
      profiles: [buildProfile(true, 1, 4, 3, 2, 4)],
    },
    {
      name: 'Venomblood (Blade & Whip)',
      profiles: [buildProfile(true, 1, 3, 3, 2, 4), buildProfile(false, 3, 3, 3, 1, 2)],
    },
    {
      name: 'Clearblood',
      profiles: [buildProfile(true, 1, 4, 3, 1, 3)],
    },
    {
      name: 'Clearblood (Shield)',
      profiles: [buildProfile(true, 1, 2, 3, 1, 3)],
    },
  ],
};

export default SplinteredFang;
