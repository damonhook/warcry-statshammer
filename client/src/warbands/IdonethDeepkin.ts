import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const IdonethDeepkin: IWarband = {
  name: 'Idoneth Deepkin',
  alliance: 'Order',
  isAos: true,
  fighters: [
    {
      name: 'Namarthi Reaver',
      profiles: [buildProfile(false, '3-15', 2, 3, 1, 3), buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Namarthi Reaver (Icon)',
      profiles: [buildProfile(true, '3-15', 3, 3, 1, 4), buildProfile(false, 1, 3, 4, 1, 3)],
    },
    {
      name: 'Morrsarr Prince',
      profiles: [buildProfile(true, 2, 3, 4, 2, 5)],
    },
    {
      name: 'Morrsarr Guard',
      profiles: [buildProfile(true, 2, 3, 3, 2, 4)],
    },
    {
      name: 'Ishlaen Prince',
      profiles: [buildProfile(true, 1, 4, 4, 2, 5)],
    },
    {
      name: 'Ishlaen Guard',
      profiles: [buildProfile(true, 2, 3, 3, 2, 4)],
    },
    {
      name: 'Namarti Thrall',
      profiles: [buildProfile(true, 1, 4, 3, 2, 4)],
    },
    {
      name: 'Namarti Thrall (Icon)',
      profiles: [buildProfile(true, 1, 4, 4, 2, 5)],
    },
  ],
};

export default IdonethDeepkin;
