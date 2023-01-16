import { createTheme } from '@mui/material';
import Ananda from '../../assets/fonts/Ananda.ttf';

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
    fontFamily: 'Ananda',
  },
  components: {
    MuiButton: {
        styleOverrides: {
            root: {
                fontFamily: 'Geosans '
            }
        }
    }
  }
});
