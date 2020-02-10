import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const Bonesplitterz: IWarband = {
  name: 'Bonesplitterz',
  alliance: 'Destruction',
  isAos: true,
  fighters: [
    {
      name: 'Savage Orruk (Stikka & Shield)',
      profiles: [buildProfile(true, 2, 2, 3, 1, 3)],
    },
    {
      name: 'Savage Orruk (Chompa & Shield)',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Savage Big Stabbas',
      profiles: [buildProfile(true, 1, 3, 5, 3, 6)],
    },
    {
      name: 'Savage Boss (Chompa & Shield)',
      profiles: [buildProfile(true, 1, 4, 4, 2, 5)],
    },
    {
      name: 'Savage Orruk Morboy',
      profiles: [buildProfile(true, 1, 3, 4, 2, 5)],
    },
    {
      name: 'Savage Orruk Morboy (Totem)',
      profiles: [buildProfile(true, 3, 3, 4, 2, 4)],
    },
    {
      name: 'Savage Morboy Boss',
      profiles: [buildProfile(true, 1, 4, 4, 3, 6)],
    },
    {
      name: 'Savage Orruk Arrowboy',
      profiles: [buildProfile(true, '3-15', 2, 3, 1, 3), buildProfile(false, 1, 3, 3, 1, 2)],
    },
    {
      name: 'Savage Orruk Arrowboy Boss',
      profiles: [buildProfile(true, '3-15', 3, 3, 1, 3), buildProfile(false, 1, 3, 3, 2, 4)],
    },
  ],
};

export default Bonesplitterz;
