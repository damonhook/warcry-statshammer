import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { TVector } from 'api/types';
import { IGenerator } from 'js-combinatorics';

import { D6 } from './dice';

class SimulationGenerator implements IGenerator<TVector> {
  private generator: Generator<TVector, void, unknown>;

  private numSimulations: number;

  private numAttacks: number;

  length: number;

  constructor(numSimulations: number, numAttacks: number) {
    this.numSimulations = numSimulations;
    this.length = numSimulations;
    this.numAttacks = numAttacks;
    this.init();
  }

  next(): TVector {
    const n = this.generator.next();
    if (n.done) return undefined;
    return n.value as TVector;
  }

  forEach(f: (item: TVector) => void): void {
    this.init();
    let n = this.next();
    while (n) {
      f(n);
      n = this.next();
    }
    this.init();
  }

  map<TResult>(f: (item: TVector) => TResult): TResult[] {
    return this.toArray().map(f);
  }

  filter(predicate: (item: TVector) => boolean): TVector[] {
    this.init();
    let n = this.next();
    const result = [];
    while (n) {
      if (predicate(n)) result.push(n);
      n = this.next();
    }
    this.init();
    return result;
  }

  toArray() {
    this.init();
    let n = this.next();
    const result = [];
    while (n) {
      result.push(n);
      n = this.next();
    }
    this.init();
    return result;
  }

  private init() {
    this.generator = this.createGen();
  }

  private *createGen(): Generator<TVector, undefined, TVector> {
    for (let i = 0; i < this.numSimulations; i += 1) {
      yield [...Array(this.numAttacks)].map(() => D6.roll());
    }
    return undefined;
  }
}

export default SimulationGenerator;
