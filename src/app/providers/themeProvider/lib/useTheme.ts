import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let Themes = [Theme.SUPERDARK, Theme.LIGHT, Theme.DARK];
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    //const newTheme =
    // theme === Theme.SUPERDARK ? Theme.LIGHT : Theme.SUPERDARK || Theme.LIGHT? Theme.DARK : Theme.SUPERDARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme, toggleTheme };
}
