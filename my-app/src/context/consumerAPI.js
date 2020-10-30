import React from "react";
import { ThemeContext } from "./contextAPI";

function Consumer() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div>
          <button style={{ backgroundColor: theme.background }}>
            Subscribed Theme
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Consumer;
