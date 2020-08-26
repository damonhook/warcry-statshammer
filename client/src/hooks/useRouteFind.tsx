import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const useRouteFind = (routes: string[], defaultIndex = 0): (number | boolean)[] => {
  const location = useLocation();
  const [index, setIndex] = useState(defaultIndex);
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    [...routes].reverse().some((path, idx) => {
      if (matchPath(location.pathname, { path })) {
        setIndex(routes.length - (idx + 1));
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

export default useRouteFind;
