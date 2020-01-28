export enum EPages {
  HOME = 'Home',
  STATS = 'Stats',
  ABOUT = 'About',
}

export const Routes: ReadonlyMap<EPages, string> = new Map([
  [EPages.HOME, '/'],
  [EPages.STATS, '/stats'],
  [EPages.ABOUT, '/about'],
]);

export const getRoute = (page: EPages): string => Routes.get(page) ?? (getRoute(EPages.HOME) as string);
