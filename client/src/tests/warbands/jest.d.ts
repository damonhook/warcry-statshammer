declare namespace jest {
  interface Matchers<R> {
    toHaveUniqueNames(): CustomMatcherResult;
    toHaveOneActiveProfile(): CustomMatcherResult;
    toBeValidProfile(): CustomMatcherResult;
  }
}
