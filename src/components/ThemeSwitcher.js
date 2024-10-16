import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useColorMode } from "./ThemeContext"; // Vérifiez que le chemin est correct

function ThemeSwitcher() {
  const { setThemeMode, mode } = useColorMode(); // Récupérer le mode actuel
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

  // Options de thème avec les icônes correspondantes
  const themeOptions = [
    { label: "Light", value: "light", icon: <LightModeIcon /> },
    { label: "Dark", value: "dark", icon: <DarkModeIcon /> },
    { label: "System", value: "system", icon: <SettingsBrightnessIcon /> },
  ];

  // Déterminer l'icône en fonction du thème actuel
  const getCurrentIcon = () => {
    const currentTheme = themeOptions.find((option) => option.value === mode);
    return currentTheme ? currentTheme.icon : <SettingsBrightnessIcon />;
  };

  return (
    <div>
      <Tooltip title="Choose Theme">
        <IconButton onClick={handleClick}>
          {getCurrentIcon()}
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
        {themeOptions.map((option) => (
          <MenuItem
            key={option.value}
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            onClick={() => handleThemeChange(option.value)}
          >
            {option.icon} {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default ThemeSwitcher;
