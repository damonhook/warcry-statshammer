import Combinatorics, { IGenerator } from 'js-combinatorics';

import { IFighter, IFighterProbabilities, IProfile, TVector } from '../types';
import { Counter, ICounter, TCount } from './counter';
import { D6 } from './dice';
import SimulationGenerator from './generator';

class Fighter implements IFighter {
  name: string;
  profile: IProfile;

  constructor(name: string, profile: IProfile) {
    this.name = name;
    this.profile = this.parseProfile(profile);
  }

  getProbabilities(): IFighterProbabilities {
    let permutationGenerator: IGenerator<TVector>;
    if (this.profile.attacks >= 8) {
      permutationGenerator = new SimulationGenerator(1500000, this.profile.attacks);
    } else {
      permutationGenerator = this.getDicePermutationMatrix();
    }
    const numPermutations = permutationGenerator.length;
    const counts = this.getDamageCounts(permutationGenerator);
    const metrics = this.getMetrics();
    const buckets = {
      lt: this.getBuckets(counts.lt, numPermutations, metrics.lt.max),
      eq: this.getBuckets(counts.eq, numPermutations, metrics.eq.max),
      gt: this.getBuckets(counts.gt, numPermutations, metrics.gt.max),
    };
    return {
      lt: { buckets: buckets.lt, metrics: metrics.lt },
      eq: { buckets: buckets.eq, metrics: metrics.eq },
      gt: { buckets: buckets.gt, metrics: metrics.gt },
    };
  }

  private getDamageCounts(permutationGenerator: IGenerator<TVector>): ICounter {
    const counts = new Counter();
    permutationGenerator.forEach((vector: TVector) => {
      counts.incrementLt(this.reduceVector(vector, 5));
      counts.incrementEq(this.reduceVector(vector, 4));
      counts.incrementGt(this.reduceVector(vector, 3));
    });
    return counts.toDict();
  }

  private reduceVector(vector: TVector, rollTarget: 3 | 4 | 5): number {
    return vector.reduce((acc, roll) => {
      const { hit, crit } = this.profile.damage;
      if (roll >= 6) return acc + crit;
      if (roll >= rollTarget) return acc + hit;
      return acc;
    }, 0);
  }

  private getMetrics() {
    const { attacks, damage } = this.profile;
    const max = attacks * damage.crit;
    return {
      lt: { max, mean: this.getMean(5) },
      eq: { max, mean: this.getMean(4) },
      gt: { max, mean: this.getMean(3) },
    };
  }

  private getMean(rollTarget: 3 | 4 | 5) {
    const { attacks, damage } = this.profile;
    const hitChance = (D6.sides - rollTarget) / D6.sides;
    const critChance = 1 / D6.sides;
    const mean = attacks * (hitChance * damage.hit + critChance * damage.crit);
    return Number(mean.toFixed(2));
  }

  private getBuckets(counts: TCount, numPermutations: number, max: number) {
    const buckets = Object.keys(counts)
      .map(Number)
      .sort((x, y) => x - y)
      .map(damage => ({
        damage,
        count: counts[damage],
        probability: Number(((counts[damage] * 100) / numPermutations).toFixed(2)),
      }));
    buckets.push({ damage: max + 1, count: 0, probability: 0 });
    return buckets;
  }

  private getDicePermutationMatrix(): IGenerator<TVector> {
    const { attacks } = this.profile;
    return Combinatorics.baseN(D6.getRollVector(), attacks);
  }

  private parseProfile(profile: IProfile): IProfile {
    return {
      attacks: Number(profile.attacks),
      strength: Number(profile.strength),
      damage: {
        hit: Number(profile.damage.hit),
        crit: Number(profile.damage.crit),
      },
    };
  }
}

export default Fighter;
