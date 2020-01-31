import { amber, green, grey, red, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { IConfigStore } from 'types/store';

const lightTheme = createMuiTheme({
  name: 'Light Theme',
  palette: {
    type: 'light',
    primary: {
      main: red[500],
    },
    secondary: {
      main: amber[700],
    },
    background: {
      nested: '#fff',
      paper: '#fff',
      default: grey[100],
      error: red.A100,
    },
    graphs: {
      grid: grey[300],
      axis: grey[700],
      tooltip: grey[50],
      series: ['#8884d8', '#82ca9d', '#ff7300', teal[400], '#f50057'],
    },
    notifications: {
      info: grey[900],
      success: green[600],
      warning: amber[500],
      error: red[500],
    },
  },
  typography: {
    htmlFontSize: 18,
    h6: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8rem',
      },
    },
  },
});

const darkTheme = createMuiTheme({
  name: 'Dark Theme',
  palette: {
    type: 'dark',
    primary: {
      main: red[500],
    },
    secondary: {
      main: amber.A700,
    },
    background: {
      nested: grey[800],
      paper: '#333',
      default: grey[900],
      error: red.A100,
    },
    graphs: {
      grid: grey[700],
      axis: grey[400],
      tooltip: grey[900],
      series: ['#8884d8', '#82ca9d', '#ff7300', teal[400], '#ff5252'],
    },
    notifications: {
      info: grey[100],
      success: green[600],
      warning: amber[500],
      error: red[800],
    },
  },
  typography: {
    htmlFontSize: 18,
    h6: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8rem',
      },
    },
  },
});

const getTheme = (config: IConfigStore) => (config.darkMode ? darkTheme : lightTheme);

export { lightTheme, darkTheme, getTheme as default };
