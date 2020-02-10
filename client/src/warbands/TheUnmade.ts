import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const TheUnmade: IWarband = {
  name: 'The Unmade',
  alliance: 'Chaos',
  isAos: false,
  fighters: [
    {
      name: 'Blissful One',
      profiles: [buildProfile(true, 1, 5, 4, 2, 5)],
    },
    {
      name: 'Joyous One',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Awakened One',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Awakened One (Flail)',
      profiles: [buildProfile(false, 3, 3, 3, 1, 2), buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Awakened One (Polearm)',
      profiles: [buildProfile(true, 2, 2, 3, 1, 4)],
    },
  ],
};

export default TheUnmade;
