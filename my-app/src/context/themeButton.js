import React, { useContext } from "react";
import { ThemeContext } from "./contextAPI";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  debugger;
  console.log(theme);
  return (
    <button
      onClick={toggleTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
}

export default ThemedButton;
