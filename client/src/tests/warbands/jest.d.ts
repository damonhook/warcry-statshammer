declare namespace jest {
  interface Matchers<R> {
    toHaveOneActiveProfile(): CustomMatcherResult;
    toBeValidProfile(): CustomMatcherResult;
  }
}
