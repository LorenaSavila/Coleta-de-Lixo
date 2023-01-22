import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppRouter from './Router';
import { AppThemeProvider } from './shared/context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <AppThemeProvider>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </AppThemeProvider>
  </React.StrictMode>
);
