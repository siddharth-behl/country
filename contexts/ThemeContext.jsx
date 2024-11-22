import { createContext, useState } from "react"
export const themeContext =createContext()

export default function ThemeProvider({children}) {
    const [mode, setMode] = useState(localStorage.getItem("theme"));
    
  return (
    <themeContext.Provider value={[mode, setMode]}>
      {children}
    </themeContext.Provider>
    
  )
}
