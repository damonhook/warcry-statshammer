import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const Vanguard: IWarband = {
  name: 'Vanguard Chamber',
  alliance: 'Order',
  isAos: true,
  fighters: [
    {
      name: 'Raptor Prime (Longstrike)',
      profiles: [buildProfile(true, '6-20', 1, 5, 4, 10), buildProfile(false, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Raptor Prime (Hurricane)',
      profiles: [buildProfile(true, '3-15', 3, 4, 2, 6), buildProfile(false, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Vanguard Raptor (Longstrike)',
      profiles: [buildProfile(true, '6-20', 1, 5, 4, 10), buildProfile(false, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Vanguard Raptor (Hurricane)',
      profiles: [buildProfile(true, '3-15', 3, 4, 2, 6), buildProfile(false, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Hunter Prime',
      profiles: [buildProfile(false, 8, 3, 4, 1, 4), buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Vanguard Hunter',
      profiles: [buildProfile(false, 8, 3, 4, 1, 4), buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Aetherwing',
      profiles: [buildProfile(true, 1, 3, 2, 1, 2)],
    },
    {
      name: 'Gryph-hound',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
  ],
};

export default Vanguard;
