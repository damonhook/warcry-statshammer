import { Dice } from '../models/dice';

describe('Dice', () => {
  describe('Roll Vector', () => {
    test('D3', () => {
      expect(new Dice(3).getRollVector()).toEqual([1, 2, 3]);
    });
    test('D6', () => {
      expect(new Dice(6).getRollVector()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('D12', () => {
      expect(new Dice(12).getRollVector()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
});
