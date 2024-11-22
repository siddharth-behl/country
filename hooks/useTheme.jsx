import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext.jsx";

export default function useTheme() {
  return useContext(themeContext);
}
