import { IFighterProbabilities } from 'api/types';

import Fighter from '../models/fighter';
import * as t from './statsController.types';

export class StatsController {
  compareFighters({
    fighters,
    toughness: { min = 'auto', max = 'auto' },
  }: t.ICompareFightersParams): t.ICompareFightersResponse {
    const fighterList = fighters.map(f => new Fighter(f.name, f.profile));
    const toughnessRange = this.getToughnessRanges(fighterList, { min, max });
    const fighterProbabilitiesData: IFighterProbabilities[] = fighterList.map(fighter =>
      fighter.getProbabilities(),
    );
    const toughnessList = this.range(Math.max(toughnessRange.min, 1), toughnessRange.max);
    const data = toughnessList.map(toughness =>
      fighterList.reduce<t.TMappedResult>(
        (acc, fighter, index) => {
          const probabilityData = fighterProbabilitiesData[index];
          if (fighter.profile.strength < toughness) acc.results[fighter.name] = probabilityData.lt;
          else if (fighter.profile.strength === toughness) acc.results[fighter.name] = probabilityData.eq;
          else if (fighter.profile.strength > toughness) acc.results[fighter.name] = probabilityData.gt;
          return acc;
        },
        { toughness, results: {} },
      ),
    );
    return { results: data.map(d => this.buildResult(d)) };
  }

  private getToughnessRanges(
    fighters: Fighter[],
    toughness: {
      min: number | 'auto';
      max: number | 'auto';
    },
  ) {
    const minStr = Math.min(...fighters.map(f => f.profile.strength));
    const maxStr = Math.max(...fighters.map(f => f.profile.strength));
    let min = toughness.min == null || toughness.min === 'auto' ? minStr - 1 : toughness.min;
    let max = toughness.max == null || toughness.max === 'auto' ? maxStr + 1 : toughness.max;
    max = Math.max(max, 1);
    min = Math.min(Math.max(min, 1), max);
    return { min, max };
  }

  private range(start: number, end: number) {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  }

  private buildResult(data: t.TMappedResult): t.ICompareFightersResult {
    const fighterNames = Object.keys(data.results);
    const mappedProbabilities = this.getMappedProbabilities(data);
    const metrics = this.getMappedMetrics(data);
    const discrete = this.buildDiscreteProbabilities(mappedProbabilities);
    const cumulative = this.buildCumulativeProbabilities(mappedProbabilities, fighterNames, metrics);
    return { toughness: data.toughness, discrete, cumulative, metrics };
  }

  private getMappedProbabilities(data: t.TMappedResult): t.TMappedProbabilities {
    return Object.keys(data.results).reduce<t.TMappedProbabilities>((acc, name) => {
      data.results[name].buckets.forEach(({ damage, probability }) => {
        if (acc[damage] == null) acc[damage] = {};
        acc[damage][name] = probability;
      });
      return acc;
    }, {});
  }

  private getMappedMetrics(data: t.TMappedResult): t.TMetrics {
    const metrics = ['max', 'mean'];
    const initial = metrics.reduce<t.TMetrics>((acc, m) => ({ ...acc, [m]: {} }), {});
    return Object.keys(data.results).reduce<t.TMetrics>((acc, name) => {
      metrics.forEach(metric => {
        acc[metric][name] = data.results[name].metrics[metric];
      });
      return acc;
    }, initial);
  }

  private buildDiscreteProbabilities(probabilities: t.TMappedProbabilities): t.TProbabilityResult[] {
    return Object.keys(probabilities)
      .map(Number)
      .sort((x, y) => x - y)
      .map(damage => ({ damage, ...probabilities[damage] }));
  }

  private buildCumulativeProbabilities(
    probabilities: t.TMappedProbabilities,
    fighterNames: string[],
    metrics: t.TMetrics,
  ): t.TProbabilityResult[] {
    const maxDamage = Math.max(...Object.keys(probabilities).map(n => Number(n)));
    const sums = fighterNames.reduce((acc, name) => ({ ...acc, [name]: 0 }), {});
    const cumulative = [...Array(maxDamage)].map((_, damage) => {
      const map = probabilities[damage] ?? {};
      return fighterNames.reduce(
        (acc, name) => {
          sums[name] += map[name] ?? 0;
          if (sums[name] >= 100 || damage > metrics.max[name]) {
            sums[name] = 100;
          }
          return { ...acc, [name]: Number(sums[name].toFixed(2)) };
        },
        { damage },
      );
    });
    return [
      ...cumulative,
      fighterNames.reduce((acc, name) => ({ ...acc, [name]: 100 }), { damage: maxDamage }),
    ];
  }
}

export default StatsController;
