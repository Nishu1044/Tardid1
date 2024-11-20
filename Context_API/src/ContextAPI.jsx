import React, { createContext, useContext, useState } from 'react';




// create contect 
const ThemeContext = createContext();


// provide context 
const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState("light");

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


// consume the context
const ThemeSwitcher = () => {
const {theme,setTheme} = useContext(ThemeContext)

// Ensure theme and setTheme are defined before using
  if (!theme || !setTheme) {
    return <p>Loading theme...</p>;
  }

    return(
        <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
           Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    )
}




const ContextAPI = () => {
  return (
   <ThemeProvider>
    <div>
    <ThemeSwitcher/>
    </div>
   </ThemeProvider>
  )
}

export default ContextAPI