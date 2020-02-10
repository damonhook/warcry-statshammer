import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const CypherLords: IWarband = {
  name: 'Cypher Lords',
  alliance: 'Chaos',
  isAos: false,
  fighters: [
    {
      name: 'Thrallmaster',
      profiles: [buildProfile(true, 1, 5, 4, 2, 6)],
    },
    {
      name: 'Luminate',
      profiles: [buildProfile(true, 2, 5, 4, 2, 5)],
    },
    {
      name: 'Mirrorblade (Duelling Swords)',
      profiles: [buildProfile(true, 1, 5, 4, 2, 4)],
    },
    {
      name: 'Mirrorblade (Glaive)',
      profiles: [buildProfile(true, 2, 4, 4, 2, 5)],
    },
    {
      name: 'Mindbound',
      profiles: [buildProfile(true, 1, 4, 3, 1, 3)],
    },
    {
      name: 'Mindbound (Glaive)',
      profiles: [buildProfile(true, 2, 3, 3, 1, 4)],
    },
  ],
};

export default CypherLords;
