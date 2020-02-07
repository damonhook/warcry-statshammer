import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const Nighthaunt: IWarband = {
  name: 'Nighthaunt',
  alliance: 'Death',
  isAos: true,
  fighters: [
    {
      name: 'Chainrasp',
      profiles: [buildProfile(true, 1, 3, 3, 1, 2)],
    },
    {
      name: 'Dreadwarden',
      profiles: [buildProfile(true, 1, 3, 3, 2, 4)],
    },
    {
      name: 'Grimghast Reaper',
      profiles: [buildProfile(true, 2, 3, 3, 1, 4)],
    },
    {
      name: 'Extoller of Shyish',
      profiles: [buildProfile(true, 2, 3, 3, 2, 4)],
    },
    {
      name: 'Spirit Host',
      profiles: [buildProfile(true, 1, 6, 3, 1, 4)],
    },
    {
      name: 'Glaivewraith Stalker',
      profiles: [buildProfile(true, 2, 3, 3, 1, 3)],
    },
  ],
};

export default Nighthaunt;
