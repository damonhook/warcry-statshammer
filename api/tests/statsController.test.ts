import { StatsController } from '../controllers/statsController';
import * as t from '../controllers/statsController.types';

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
});
