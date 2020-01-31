import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export const useBreakpointChanged = () => {
  const theme = useTheme();
  const breakpoints: boolean[] = [
    useMediaQuery(theme.breakpoints.down('xs')),
    useMediaQuery(theme.breakpoints.down('sm')),
    useMediaQuery(theme.breakpoints.down('md')),
    useMediaQuery(theme.breakpoints.down('lg')),
    useMediaQuery(theme.breakpoints.down('xl')),
  ];

  return breakpoints;
};
