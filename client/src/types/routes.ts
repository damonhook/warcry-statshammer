export enum EPages {
  HOME = 'Home',
  STATS = 'Stats',
  ABOUT = 'About',
  IMPORT = 'Import',
}

export const Routes: ReadonlyMap<EPages, string> = new Map([
  [EPages.HOME, '/'],
  [EPages.STATS, '/stats'],
  [EPages.ABOUT, '/about'],
  [EPages.IMPORT, '/import'],
]);

export const getRoute = (page: EPages): string => Routes.get(page) ?? (getRoute(EPages.HOME) as string);
