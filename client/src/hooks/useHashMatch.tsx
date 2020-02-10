import { useLocation } from 'react-router-dom';

export const useHashMatch = (hash: string): boolean => {
  const location = useLocation();
  return location.hash === hash;
};
