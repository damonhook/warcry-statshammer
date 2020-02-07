import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const GloomspiteGitz: IWarband = {
  name: 'Gloomspite Gitz',
  alliance: 'Destruction',
  isAos: true,
  fighters: [
    {
      name: 'Stabba',
      profiles: [buildProfile(true, 1, 3, 3, 1, 3)],
    },
    {
      name: 'Stabba (Spear)',
      profiles: [buildProfile(true, 2, 2, 3, 1, 4)],
    },
    {
      name: 'Stabba (Net)',
      profiles: [buildProfile(true, 1, 3, 3, 1, 2)],
    },
    {
      name: 'Moonclan Boss',
      profiles: [buildProfile(true, 1, 4, 4, 2, 4)],
    },
    {
      name: 'Shoota',
      profiles: [buildProfile(true, '3-12', 2, 3, 1, 3), buildProfile(false, 1, 3, 3, 1, 2)],
    },
    {
      name: 'Cave Squig',
      profiles: [buildProfile(true, 1, 4, 5, 2, 4)],
    },
    {
      name: 'Squig Herder',
      profiles: [buildProfile(true, 1, 3, 3, 1, 2)],
    },
    {
      name: 'Squig Hopper',
      profiles: [buildProfile(true, 1, 4, 5, 2, 4)],
    },
    {
      name: 'Squig Hopper Boss',
      profiles: [buildProfile(true, 1, 5, 5, 2, 4)],
    },
    {
      name: 'Boingrot Bounder',
      profiles: [buildProfile(true, 2, 3, 5, 2, 5)],
    },
    {
      name: 'Boingrot Boss',
      profiles: [buildProfile(true, 2, 4, 5, 2, 5)],
    },
  ],
};

export default GloomspiteGitz;
