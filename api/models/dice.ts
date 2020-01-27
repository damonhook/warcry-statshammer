import { TVector } from 'api/types';

export class Dice {
  sides: number;

  constructor(sides: number) {
    this.sides = sides;
  }

  roll() {
    return 1 + Math.floor(Math.random() * this.sides);
  }

  getRollVector(): TVector {
    return [...Array(this.sides)].map((_, index) => index + 1);
  }
}

const D6 = new Dice(6);

export { Dice as default, D6 };
