import { TToughnessConfig, TToughnessConfigValue } from 'types/config';

export const isAuto = (val: TToughnessConfigValue) => typeof val !== 'number';

export const getToughnessRange = (toughnessConfig: TToughnessConfig, minStr: number, maxStr: number) => {
  let min = isAuto(toughnessConfig?.min) ? minStr - 1 : Number(toughnessConfig.min);
  let max = isAuto(toughnessConfig?.max) ? maxStr + 1 : Number(toughnessConfig.max);
  min = Math.max(min, 1);
  max = Math.max(max, min);
  return { min, max };
};

export const getWarning = (
  toughness: { min: number; max: number },
  minStr: number,
  maxStr: number,
): string | null => {
  if (toughness.min >= minStr) {
    return `
      Applied toughness minumum is >= than the minimum strength of the applied fighters.
      Decrease the minimum, or set to 'Auto' to get the best data.  
    `;
  }
  if (toughness.max <= maxStr) {
    return `
      Applied toughness maximum is <= than the maximum strength of the applied fighters.
      Increase the maximum, or set to 'Auto' to get the best data.
    `;
  }
  return null;
};
