import React from "react";
    const toggleThemeLight = () =>{
        setTheme('light')
      }
      const toggleThemeDark = () => {
        setTheme('dark');
      }
        <button onClick={toggleThemeLight}>Light</button>
        <button onClick={toggleThemeDark}>Dark</button>
