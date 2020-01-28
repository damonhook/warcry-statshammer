export const getSum = (array: number[]) => array.reduce((acc, n) => acc + n, 0);

export const getMax = (array: number[]) => Math.max(...array);

/** Get the mean of an array of values */
export const getMean = (array: number[], decimalPlaces = 2): number => {
  const mean = getSum(array) / array.length;
  return Number(mean.toFixed(decimalPlaces));
};
