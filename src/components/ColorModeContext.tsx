import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Créer un contexte pour le mode de couleur
interface ColorModeContextType {
  mode: 'light' | 'dark' | 'system';
  setMode: (mode: 'light' | 'dark' | 'system') => void;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  setMode: () => {},
  toggleColorMode: () => {},
});

// Fournisseur de contexte pour gérer les thèmes
export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('light');

  // Détecter les préférences système
  useEffect(() => {
    if (mode === 'system') {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [mode]);

  // Basculer entre les modes de couleur
  const colorMode = useMemo(
    () => ({
      mode,
      setMode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : prevMode === 'dark' ? 'system' : 'light'));
      },
    }),
    [mode]
  );

  // Créer le thème en fonction du mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte du mode de couleur
export const useColorMode = () => useContext(ColorModeContext);
