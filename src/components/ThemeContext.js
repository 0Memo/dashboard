import { createTheme, ThemeProvider } from "@mui/material/styles"; // Importez ThemeProvider ici
import React, { createContext, useContext, useMemo, useState } from "react";

const ColorModeContext = createContext();

export const ToggleColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Palette du thème clair
                primary: {
                  main: "#1976d2",
                },
                // Ajoutez d'autres configurations si nécessaire
              }
            : {
                // Palette du thème sombre
                primary: {
                  main: "#90caf9",
                },
                // Ajoutez d'autres configurations si nécessaire
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {" "}
        {/* Assurez-vous que ThemeProvider enveloppe les enfants */}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  return useContext(ColorModeContext);
};
