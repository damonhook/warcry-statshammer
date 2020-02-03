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
  describe('Constructor', () => {
    test('Correctly casts bad types', () => {
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
  });

  describe('Roll Target', () => {
    test('Strength < Toughness', () => {
      expect(testFighter.getRollTarget({ toughness: 5 })).toEqual(5);
    });
    test('Strength = Toughness', () => {
      expect(testFighter.getRollTarget({ toughness: 4 })).toEqual(4);
    });
    test('Strength > Toughness', () => {
      expect(testFighter.getRollTarget({ toughness: 3 })).toEqual(3);
    });
  });

  test('Get Permutation Matrix', () => {
    /* Working:
    Roll Vector: [1, 2, 3, 4, 5, 6]
    Roll Target: 4
    Result Vector: [0, 0, 0, 1, 1, 2] */
    const permutations = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 1],
      [0, 1],
      [0, 2],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 1],
      [0, 1],
      [0, 2],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 1],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 1],
      [1, 1],
      [1, 2],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 1],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 0],
      [2, 0],
      [2, 1],
      [2, 1],
      [2, 2],
    ];
    expect(testFighter.getPermutationMatrix({ toughness: 4 }).sort()).toEqual(permutations.sort());
  });

  test('Get Reduced Permutations', () => {
    /* Working:
      - 3 repeats of sequence 0, 0, 0, 1, 1, 2
      - 2 repeats of sequence 1, 1, 1, 2, 2, 3
      - 1 repeat of sequence 2, 2, 2, 3, 3, 4
    */
    const getRepeatedSequence = (sequence: number[], repeats: number): number[] =>
      Array(repeats)
        .fill(sequence)
        .flat();

    const reducedPermutations = [
      ...getRepeatedSequence([0, 0, 0, 1, 1, 2], 3),
      ...getRepeatedSequence([1, 1, 1, 2, 2, 3], 2),
      ...getRepeatedSequence([2, 2, 2, 3, 3, 4], 1),
    ];
    expect(testFighter.getReducedPermutations({ toughness: 4 }).sort()).toEqual(reducedPermutations.sort());
  });

  test('Get Probabilities', () => {
    const expected = {
      buckets: [
        { damage: 0, count: 9, probability: 25 },
        { damage: 1, count: 12, probability: 33.33 },
        { damage: 2, count: 10, probability: 27.78 },
        { damage: 3, count: 4, probability: 11.11 },
        { damage: 4, count: 1, probability: 2.78 },
        { damage: 5, count: 0, probability: 0 },
      ],
      // Total: 48
      metrics: {
        max: 4,
        mean: 1.33,
      },
    };
    const output = testFighter.getProbabilities({ toughness: 4 });
    expect(output.buckets).toEqual(expected.buckets);
    expect(output.metrics).toEqual(expected.metrics);
  });
});
