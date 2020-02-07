import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const Ironjawz: IWarband = {
  name: 'Ironjawz',
  alliance: 'Destruction',
  isAos: true,
  fighters: [
    {
      name: 'Brute (2 Choppas)',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Brute (Gore-Hacka)',
      profiles: [buildProfile(true, 1, 3, 5, 2, 4)],
    },
    {
      name: 'Brute (Gore-Choppa)',
      profiles: [buildProfile(true, 1, 3, 5, 3, 6)],
    },
    {
      name: 'Brute Boss (Klaw & Smasha)',
      profiles: [buildProfile(true, 1, 4, 5, 2, 5)],
    },
    {
      name: 'Brute Boss (Choppa)',
      profiles: [buildProfile(true, 1, 3, 6, 3, 6)],
    },
    {
      name: 'Ardboy (Choppa & Smasha)',
      profiles: [buildProfile(true, 1, 4, 4, 1, 4)],
    },
    {
      name: 'Ardboy (Choppa & Shield)',
      profiles: [buildProfile(true, 1, 3, 4, 1, 4)],
    },
    {
      name: 'Ardboy Boss (Choppa & Smasha)',
      profiles: [buildProfile(true, 1, 4, 5, 2, 5)],
    },
    {
      name: 'Ardboy Boss (Choppa)',
      profiles: [buildProfile(true, 1, 3, 4, 2, 4)],
    },
  ],
};

export default Ironjawz;
