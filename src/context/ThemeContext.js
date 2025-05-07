import React, {createContext, useState} from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
   setIsDarkTheme(prevTheme => !prevTheme)
 }
  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
