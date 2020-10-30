import React, { useState } from "react";
import Toolbar from "./toolbar";
import Consumer from './consumerAPI';

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext();

function ContextAPI() {
  const [theme, setTheme] = useState(themes.light);
 localStorage.setItem('theme',JSON.stringify(theme));
  const toggleTheme = () => {
    let changedTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(changedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
      <Consumer/>
    </ThemeContext.Provider>
  );
}

export default ContextAPI;
