import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const Bloodbound: IWarband = {
  name: 'Blades Of Khorne: Bloodbound',
  alliance: 'Chaos',
  isAos: true,
  fighters: [
    {
      name: 'Blood Warrior Champion',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Blood Warrior (Goreaxe and Gorefist)',
      profiles: [buildProfile(true, 1, 3, 3, 2, 4)],
    },
    {
      name: 'Blood Warrior (Pair of Goreaxes)',
      profiles: [buildProfile(true, 1, 4, 3, 2, 4)],
    },
    {
      name: 'Blood Warrior (Goreglaive)',
      profiles: [buildProfile(true, 1, 3, 4, 2, 5)],
    },
    {
      name: 'Bloodreaver Chieftain',
      profiles: [buildProfile(true, 1, 5, 3, 2, 4)],
    },
    {
      name: 'Bloodreaver (Meatripper Axe)',
      profiles: [buildProfile(true, 1, 3, 4, 1, 3)],
    },
    {
      name: 'Bloodreaver (Reaver Blades)',
      profiles: [buildProfile(true, 1, 4, 3, 1, 3)],
    },
    {
      name: 'Wrathmaster',
      profiles: [buildProfile(true, 2, 6, 4, 2, 4)],
    },
    {
      name: 'Wrathmonger',
      profiles: [buildProfile(true, 2, 5, 4, 1, 4)],
    },
    {
      name: 'Skullseeker',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Skullreaper',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Khorgorath',
      profiles: [buildProfile(true, 1, 3, 5, 4, 8)],
    },
  ],
};

export default Bloodbound;
