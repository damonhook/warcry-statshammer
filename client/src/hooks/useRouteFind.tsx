import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const useRouteFind = (routes: string[], defaultIndex = 0): [number, boolean] => {
  const location = useLocation();
  const [index, setIndex] = useState(defaultIndex);
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    [...routes].reverse().some((path, index) => {
      if (matchPath(location.pathname, { path })) {
        setIndex(routes.length - (index + 1));
        setMatched(true);
        return true;
      }
      setMatched(false);
      setIndex(defaultIndex);
      return false;
    });
  }, [location, routes, defaultIndex]);

  return [index, matched];
};
