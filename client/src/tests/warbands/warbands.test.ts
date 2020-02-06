import { IFighter, IProfile } from 'types/fighter';
import warbands from 'warbands';

expect.extend({
  toHaveOneActiveProfile(received: IFighter) {
    const pass = received.profiles.filter(i => i.active).length === 1;
    return {
      message: () => `expected ${received?.name ?? 'Fighter'} to have only 1 active profile`,
      pass,
    };
  },
  toBeValidProfile(received: IProfile) {
    const pass =
      typeof received.active === 'boolean' &&
      (typeof received.range === 'number' || typeof received.range === 'string') &&
      typeof received.attacks === 'number' &&
      typeof received.strength === 'number' &&
      typeof received.damage === 'object' &&
      typeof received.damage.hit === 'number' &&
      typeof received.damage.crit === 'number';
    return {
      message: () => `expected ${JSON.stringify(received)} to be a valid fighter profile`,
      pass,
    };
  },
});

describe('Warbands', () => {
  warbands.forEach((warband, index) => {
    describe(`${warband?.name ?? index}`, () => {
      test('Metadata', () => {
        expect(typeof warband.name).toBe('string');
        expect(['Chaos', 'Death', 'Destruction', 'Order']).toContain(warband.alliance);
        expect(typeof warband.isAos).toBe('boolean');
      });

      describe('Fighters', () => {
        expect(warband.fighters.length).toBeGreaterThan(0);
        warband.fighters.forEach((fighter, fighterIndex) => {
          test(`${fighter?.name ?? fighterIndex}`, () => {
            expect(typeof fighter.name).toBe('string');
            expect(fighter.profiles.length).toBeGreaterThan(0);
            expect(fighter).toHaveOneActiveProfile();
            fighter.profiles.forEach(profile => {
              expect(profile).toBeValidProfile();
            });
          });
        });
      });
    });
  });
});
