import { StatsController } from '../controllers/statsController';
import * as t from '../controllers/statsController.types';
import Fighter from '../models/fighter';

const mockMappedResult: t.TMappedResult = {
  toughness: 4,
  results: {
    'Test Fighter': {
      buckets: [
        { damage: 0, count: 9, probability: 25 },
        { damage: 1, count: 12, probability: 33.33 },
        { damage: 2, count: 10, probability: 27.78 },
        { damage: 3, count: 4, probability: 11.11 },
        { damage: 4, count: 1, probability: 2.78 },
        { damage: 5, count: 0, probability: 0 },
      ],
      metrics: {
        max: 4,
        mean: 1.33,
      },
    },
  },
};

describe('Stats Controller', () => {
  test('Build Result', () => {
    const controller = new StatsController();
    const expected: t.ICompareFightersResult = {
      toughness: 4,
      discrete: [
        { damage: 0, 'Test Fighter': 25 },
        { damage: 1, 'Test Fighter': 33.33 },
        { damage: 2, 'Test Fighter': 27.78 },
        { damage: 3, 'Test Fighter': 11.11 },
        { damage: 4, 'Test Fighter': 2.78 },
        { damage: 5, 'Test Fighter': 0 },
      ],
      cumulative: [
        { damage: 0, 'Test Fighter': 25 },
        { damage: 1, 'Test Fighter': 58.33 },
        { damage: 2, 'Test Fighter': 86.11 },
        { damage: 3, 'Test Fighter': 97.22 },
        { damage: 4, 'Test Fighter': 100 },
        { damage: 5, 'Test Fighter': 100 },
      ],
      inverse: [
        { damage: 0, 'Test Fighter': 100 },
        { damage: 1, 'Test Fighter': 75 },
        { damage: 2, 'Test Fighter': 41.67 },
        { damage: 3, 'Test Fighter': 13.89 },
        { damage: 4, 'Test Fighter': 2.78 },
        { damage: 5, 'Test Fighter': 0 },
      ],
      metrics: {
        max: {
          'Test Fighter': 4,
        },
        mean: {
          'Test Fighter': 1.33,
        },
      },
    };
    // @ts-ignore
    const output = controller.buildResult(mockMappedResult);
    expect(output).toEqual(expected);
  });

  describe('Get Toughness Ranges', () => {
    const controller = new StatsController();
    const fighterList = [
      new Fighter('Test 1', {
        attacks: 2,
        strength: 3,
        damage: { hit: 1, crit: 2 },
      }),
      new Fighter('Test 2', {
        attacks: 2,
        strength: 4,
        damage: { hit: 2, crit: 4 },
      }),
    ];

    test('Auto <-> Auto', () => {
      // @ts-ignore
      expect(controller.getToughnessRanges(fighterList, { min: 'auto', max: 'auto' })).toEqual({
        min: 2,
        max: 5,
      });
    });
    test('3 <-> Auto', () => {
      // @ts-ignore
      expect(controller.getToughnessRanges(fighterList, { min: 3, max: 'auto' })).toEqual({
        min: 3,
        max: 5,
      });
    });
    test('Auto <-> 7', () => {
      // @ts-ignore
      expect(controller.getToughnessRanges(fighterList, { min: 'auto', max: 7 })).toEqual({
        min: 2,
        max: 7,
      });
    });
    test('7 <-> Auto (min > max)', () => {
      // @ts-ignore
      expect(controller.getToughnessRanges(fighterList, { min: 7, max: 'auto' })).toEqual({
        min: 7,
        max: 7,
      });
    });
    test('Auto <-> 1 (max < min)', () => {
      // @ts-ignore
      expect(controller.getToughnessRanges(fighterList, { min: 'auto', max: 1 })).toEqual({
        min: 2,
        max: 2,
      });
    });
    test('-1 <-> -10 (negative numbers)', () => {
      // @ts-ignore
      expect(controller.getToughnessRanges(fighterList, { min: -1, max: -10 })).toEqual({
        min: 1,
        max: 1,
      });
    });
  });
});
