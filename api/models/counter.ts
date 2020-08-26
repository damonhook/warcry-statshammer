export type TCount = { [damage: number]: number };

export interface ICounter {
  lt: TCount;
  eq: TCount;
  gt: TCount;
}

export class Counter implements ICounter {
  lt: TCount;

  eq: TCount;

  gt: TCount;

  constructor() {
    this.lt = {};
    this.eq = {};
    this.gt = {};
  }

  increment(variant: keyof ICounter, damage: number) {
    this[variant][damage] = (this[variant][damage] || 0) + 1;
  }

  incrementLt(damage: number) {
    this.increment('lt', damage);
  }

  incrementEq(damage: number) {
    this.increment('eq', damage);
  }

  incrementGt(damage: number) {
    this.increment('gt', damage);
  }

  toDict(): ICounter {
    const { lt, eq, gt } = this;
    return { lt, eq, gt };
  }
}
