import React, { useState } from "react";
import { useContext, createContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  function updateTheme() {
    setTheme((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
export { useTheme };
