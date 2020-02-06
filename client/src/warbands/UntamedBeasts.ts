import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const UntamedBeasts: IWarband = {
  name: 'Untamed Beasts',
  alliance: 'Chaos',
  isAos: false,
  fighters: [
    {
      name: 'Heart Eater',
      profiles: [buildProfile(true, 1, 4, 4, 2, 5)],
    },
    {
      name: 'First Fang',
      profiles: [buildProfile(true, 8, 2, 4, 2, 5), buildProfile(false, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Beastspeaker',
      profiles: [buildProfile(false, 4, 4, 4, 1, 2), buildProfile(true, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Rocktucsk Prowler',
      profiles: [buildProfile(true, 1, 4, 4, 2, 5)],
    },
    {
      name: 'Preytaker (Sword)',
      profiles: [buildProfile(true, 1, 4, 3, 2, 4)],
    },
    {
      name: 'Preytaker (Axe)',
      profiles: [buildProfile(true, 1, 3, 4, 2, 4)],
    },
    {
      name: 'Plains-runner',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
  ],
};

export default UntamedBeasts;
