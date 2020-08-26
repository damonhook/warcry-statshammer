import Fighter from '../models/fighter';

const testProfile = {
  attacks: 2,
  strength: 4,
  damage: {
    hit: 1,
    crit: 2,
  },
};
const testFighter = new Fighter('Test', testProfile);

describe('Fighter', () => {
  test('Constructor', () => {
    const badProfile = {
      attacks: '2',
      strength: '4',
      damage: {
        hit: '1',
        crit: '2',
      },
    };
    // @ts-ignore
    const fighter = new Fighter('Test', badProfile);
    expect(fighter.name).toBe('Test');
    expect(fighter.profile).toEqual(testProfile);
  });

  test('Dice Permutation Matrix', () => {
    // Roll Vector: [1, 2, 3, 4, 5, 6]
    // prettier-ignore
    const permutations = [
      [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
      [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
      [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6],
      [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6],
      [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],
      [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
    ];
    expect(testFighter.getDicePermutationMatrix().toArray().sort()).toEqual(permutations.sort());
  });

  describe('Get Probabilities', () => {
    test('Strength < Toughness', () => {
      /* Working:
        - 4 repeats of sequence 0, 0, 0, 0, 1, 2
        - 1 repeats of sequence 1, 1, 1, 1, 2, 3
        - 1 repeat of sequence 2, 2, 2, 2, 3, 4
      */
      const expected = {
        buckets: [
          { damage: 0, count: 16, probability: 44.44 },
          { damage: 1, count: 8, probability: 22.22 },
          { damage: 2, count: 9, probability: 25 },
          { damage: 3, count: 2, probability: 5.56 },
          { damage: 4, count: 1, probability: 2.78 },
          { damage: 5, count: 0, probability: 0 },
        ],
        metrics: {
          max: 4,
          mean: 1,
        },
      };
      const output = testFighter.getProbabilities();
      expect(output.lt.buckets).toEqual(expected.buckets);
      expect(output.lt.metrics).toEqual(expected.metrics);
    });
    test('Strength = Toughness', () => {
      /* Working:
        - 3 repeats of sequence 0, 0, 0, 1, 1, 2
        - 2 repeats of sequence 1, 1, 1, 2, 2, 3
        - 1 repeat of sequence 2, 2, 2, 3, 3, 4
      */
      const expected = {
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
      };
      const output = testFighter.getProbabilities();
      expect(output.eq.buckets).toEqual(expected.buckets);
      expect(output.eq.metrics).toEqual(expected.metrics);
    });
    test('Strength > Toughness', () => {
      /* Working:
        - 2 repeats of sequence 0, 0, 1, 1, 1, 2
        - 3 repeats of sequence 1, 1, 2, 2, 2, 3
        - 1 repeat of sequence 2, 2, 3, 3, 3, 4
      */
      const expected = {
        buckets: [
          { damage: 0, count: 4, probability: 11.11 },
          { damage: 1, count: 12, probability: 33.33 },
          { damage: 2, count: 13, probability: 36.11 },
          { damage: 3, count: 6, probability: 16.67 },
          { damage: 4, count: 1, probability: 2.78 },
          { damage: 5, count: 0, probability: 0 },
        ],
        metrics: {
          max: 4,
          mean: 1.67,
        },
      };
      const output = testFighter.getProbabilities();
      expect(output.gt.buckets).toEqual(expected.buckets);
      expect(output.gt.metrics).toEqual(expected.metrics);
    });
  });
});
