// ThemeContext.js
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ColorModeContext = createContext({
  setThemeMode: () => {},
  mode: "light",
});

export function ToggleColorModeProvider({ children }) {
  const [mode, setMode] = useState("system");

  // Détecter le thème du système
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const currentThemeMode = mode === "system" ? getSystemTheme() : mode;

  const colorMode = useMemo(
    () => ({
      setThemeMode: (newMode) => {
        setMode(newMode);
      },
      mode: currentThemeMode, // Ajout du mode actuel
    }),
    [currentThemeMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentThemeMode,
        },
      }),
    [currentThemeMode]
  );

  useEffect(() => {
    // Mettre à jour le thème en cas de changement du thème système
    if (mode === "system") {
      const listener = () => setMode("system");
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", listener);
      return () =>
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", listener);
    }
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ColorModeContext);
}
