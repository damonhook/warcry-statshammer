import { buildProfile } from './utils';
import { IWarband } from './warbands.types';

const Skaven: IWarband = {
    name: 'Skaven',
    alliance: 'Chaos',
    isAos: true,
    fighters: [
        {
            name: 'Deathmaster',
            profiles: [buildProfile(false, '8', 3, 3, 1, 4), buildProfile(true, 1, 5, 4, 2, 4)],
        },
        {
            name: 'Clawlord',
            profiles: [buildProfile(true, '1', 4, 4, 2, 5)]
        },
        {
            name: 'Arch-Warlock',
            profiles: [buildProfile(true, '2', 3, 5, 2, 4)]
        },
        {
            name: 'Warlock Bombardier',
            profiles: [buildProfile(true, '6-15', 2, 4, 2, 4), buildProfile(false, '1', 2, 3, 1, 3)]
        },
        {
            name: 'Plague Priest',
            profiles: [buildProfile(true, '2', 4, 3, 2, 4)]
        },
        {
            name: 'Fangleader',
            profiles: [buildProfile(true, '1', 4, 4, 2, 4)]
        },
        {
            name: 'Grey Seer',
            profiles: [buildProfile(true, '3-7', 2, 3, 3, 6), buildProfile(false, '2', 3, 3, 1, 4)]
        },
        {
            name: 'Warlock Engineer',
            profiles: [buildProfile(false, '8', 2, 3, 1, 4), buildProfile(true, '1', 3, 3, 2, 4)]
        },
        {
            name: 'Bringer of the Word',
            profiles: [buildProfile(true, '1', 4, 3, 2, 4)]
        },
        {
            name: 'Clawleader',
            profiles: [buildProfile(true, '1', 4, 3, 2, 4)]
        },
        {
            name: 'Master Moulder',
            profiles: [buildProfile(false, '3', 3, 3, 1, 3), buildProfile(true, '1', 3, 3, 2, 4)]
        },
        {
            name: 'Nightleader',
            profiles: [buildProfile(false, '8', 3, 3, 1, 3), buildProfile(true, '1', 4, 3, 2, 4)]
        },
        {
            name: 'Stormfiend with Grinderfists',
            profiles: [buildProfile(true, '1', 4, 5, 4, 8)]
        },
        {
            name: 'Stormfiend with Doomflayer Gauntlets',
            profiles: [buildProfile(true, '1', 5, 4, 4, 8)]
        },
        {
            name: 'Stormfiend with Shock Gauntlets',
            profiles: [buildProfile(true, '1', 4, 4, 4, 10)]
        },
        {
            name: 'Stormfiend with Ratling Cannons',
            profiles: [buildProfile(false, '3-10', 4, 4, 2, 4), buildProfile(true, '1', 3, 4, 4, 8)]
        },
        {
            name: 'Stormfiend with Windlaunchers',
            profiles: [buildProfile(false, '3-20', 2, 4, 2, 4), buildProfile(true, '1', 3, 4, 4, 8)]
        },
        {
            name: 'Stormfiend with Warpfire Projectors',
            profiles: [buildProfile(false, '3-8', 2, 5, 3, 6), buildProfile(true, '1', 3, 4, 4, 8)]
        },
        {
            name: 'Rat Ogor',
            profiles: [buildProfile(true, '1', 4, 4, 4, 8)]
        },
        {
            name: 'Rat Ogor with Warpfire Gun',
            profiles: [buildProfile(false, '3-15', 2, 5, 3, 6), buildProfile(true, '1', 3, 4, 4, 8)]
        },
        {
            name: 'Doom-Flayer',
            profiles: [buildProfile(true, '1', 5, 5, 2, 4)]
        },
        {
            name: 'Warplock Jezzail',
            profiles: [buildProfile(true, '6-20', 1, 4, 4, 10), buildProfile(false, '1', 2, 3, 1, 2)]
        },
        {
            name: 'Warp-Grinder',
            profiles: [buildProfile(true, '1', 4, 5, 2, 5)]
        },
        {
            name: 'Plague Censer Bearer',
            profiles: [buildProfile(true, '2', 3, 4, 2, 4)]
        },
        {
            name: 'Warpfire Thrower',
            profiles: [buildProfile(true, '8', 3, 4, 1, 4)]
        },
        {
            name: 'Stormvermin with Rusty Halberd',
            profiles: [buildProfile(true, '2', 3, 3, 2, 4)]
        },
        {
            name: 'Gutter Runner',
            profiles: [buildProfile(false, '8', 2, 3, 1, 3), buildProfile(true, '1', 4, 3, 1, 4)]
        },
        {
            name: 'Skryre Acolyte',
            profiles: [buildProfile(true, '3-5', 1, 4, 3, 6), buildProfile(false, '1', 2, 3, 1, 2)]
        },
        {
            name: 'Plague Monk with Pair Of Foetid Blades',
            profiles: [buildProfile(true, '1', 4, 3, 1, 4)]
        },
        {
            name: 'Plague Monk with Foetid Blade and Woe-Stave',
            profiles: [buildProfile(true, '2', 3, 3, 1, 5)]
        },
        {
            name: 'Stormvermin with Rusty Halberd And Shield',
            profiles: [buildProfile(true, '2', 2, 3, 2, 4)]
        },
        {
            name: 'Night Runner',
            profiles: [buildProfile(false, '8', 2, 3, 1, 2), buildProfile(true, '1', 3, 3, 1, 3)]
        },
        {
            name: 'Clanrat with Rusty Spear',
            profiles: [buildProfile(true, '2', 2, 3, 1, 4)]
        },
        {
            name: 'Clanrat with Rusty Blade',
            profiles: [buildProfile(true, '1', 3, 3, 1, 3)]
        },
        {
            name: 'Packmaster',
            profiles: [buildProfile(false, '3', 3, 3, 1, 2), buildProfile(true, '1', 3, 3, 1, 3)]
        },
        {
            name: 'Giant Rat',
            profiles: [buildProfile(true, '1', 3, 3, 1, 3)]
        }
    ]
}

export default Skaven