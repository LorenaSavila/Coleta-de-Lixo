import { Box, ThemeProvider } from '@mui/material';
import { createContext, useContext, PropsWithChildren, FC } from 'react';
import { LightTheme } from '../themes/light';

type AppThemeProviderProps = {
  children: React.ReactNode;
};

interface IThemeContext {
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: FC<PropsWithChildren<AppThemeProviderProps>> = ({ children }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box width="100vw" height="100vh">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default useAppThemeContext;
