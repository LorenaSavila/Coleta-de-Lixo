import { createTheme } from '@mui/material';

const baseTheme = createTheme();

export const LightTheme = createTheme({
  palette: {
    primary: {
      light: '#4e4881',
      main: '#221b62',
      dark: '#171244',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#33b1ab',
      main: '#009e96',
      dark: '#006e69',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Geosans',
  },
  components: {
    MuiButton: {
        styleOverrides: {
            root: {
                fontFamily: 'Geosans Oblique'
            }
        }
    },
    MuiTab : {
      styleOverrides: {
        root: {
          minWidth: 1,
          fontSize: 20,
          [baseTheme.breakpoints.down('sm')] : {
            fontSize: 16
          }
        }
      }
    }
  }
});
