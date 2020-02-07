import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const DaughtersOfKhaine: IWarband = {
  name: 'Daughters of Khaine',
  alliance: 'Order',
  isAos: true,
  fighters: [
    {
      name: 'Witch Aelf (Knives)',
      profiles: [buildProfile(true, 1, 4, 3, 1, 3)],
    },
    {
      name: 'Witch Aelf (Knife & Buckler)',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Witch Aelf Hag',
      profiles: [buildProfile(true, 1, 4, 3, 1, 4)],
    },
    {
      name: 'Sister of Slaughter (Whip & Knife)',
      profiles: [buildProfile(true, 2, 4, 3, 1, 4)],
    },
    {
      name: 'Sister of Slaughter (Whip & Buckler)',
      profiles: [buildProfile(true, 2, 3, 3, 1, 4)],
    },
    {
      name: 'Sister of Slaughter Handmaiden',
      profiles: [buildProfile(true, 2, 4, 3, 2, 4)],
    },
    {
      name: 'Blood Sister',
      profiles: [buildProfile(true, 2, 5, 3, 1, 4)],
    },
    {
      name: 'Blood Sister Gorgai',
      profiles: [buildProfile(true, 2, 6, 4, 2, 4)],
    },
    {
      name: 'Blood Stalker',
      profiles: [buildProfile(true, '3-20', 2, 3, 1, 5), buildProfile(false, 1, 2, 3, 1, 2)],
    },
    {
      name: 'Blood Stalker Krone',
      profiles: [buildProfile(true, '3-20', 3, 3, 2, 5), buildProfile(false, 1, 2, 3, 1, 2)],
    },
    {
      name: 'Khinerai Heartrender',
      profiles: [buildProfile(true, 8, 2, 4, 1, 4)],
    },
    {
      name: 'Khinerai Heartrender (Shryke)',
      profiles: [buildProfile(true, 8, 3, 4, 2, 4)],
    },
    {
      name: 'Khinerai Lifetaker',
      profiles: [buildProfile(true, 1, 4, 3, 1, 4)],
    },
    {
      name: 'Khinerai Lifetaker (Harridynn)',
      profiles: [buildProfile(true, 1, 5, 3, 2, 4)],
    },
  ],
};

export default DaughtersOfKhaine;
