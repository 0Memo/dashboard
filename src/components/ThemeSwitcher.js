import DarkModeIcon from "@mui/icons-material/DarkMode"; // Icône pour le mode sombre
import LightModeIcon from "@mui/icons-material/LightMode"; // Icône pour le mode clair
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"; // Icône pour le mode système
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useColorMode } from "./ThemeContext"; // Assurez-vous que ce chemin est correct

function ThemeSwitcher() {
  const { setThemeMode, mode } = useColorMode(); // Récupère le mode actuel
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme) => {
    setThemeMode(theme);
    handleClose();
  };

  // Déterminer l'icône en fonction du thème actuel
  const getCurrentIcon = () => {
    switch (mode) {
      case "light":
        return <LightModeIcon />;
      case "dark":
        return <DarkModeIcon />;
      case "system":
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  return (
    <div>
      <Tooltip title="Choose Theme">
        <IconButton onClick={handleClick}>
          {getCurrentIcon()}{" "}
          {/* Affiche l'icône correspondant au mode actuel */}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={() => handleThemeChange("light")}
        >
          <LightModeIcon /> Light
        </MenuItem>
        <MenuItem
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={() => handleThemeChange("dark")}
        >
          <DarkModeIcon /> Dark
        </MenuItem>
        <MenuItem
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={() => handleThemeChange("system")}
        >
          <SettingsBrightnessIcon /> System
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ThemeSwitcher;
