import { IFighter } from 'types/fighter';
import warbands from 'warbands';

expect.extend({
  toHaveOneActiveProfile(received: IFighter) {
    const pass = received.profiles.filter(i => i.active).length === 1;
    if (pass) {
      return {
        message: () => `expected ${received?.name ?? 'Fighter'} to not have 1 active profile`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received?.name ?? 'Fighter'} to have only 1 active profile`,
      pass: false,
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
          });
        });
      });
    });
  });
});
