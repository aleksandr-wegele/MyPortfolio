import React from "react";
import AppContext from "../AppContext";

function Nav() {
    const {setTheme} = React.useContext(AppContext);

    const toggleThemeLight = () =>{
        setTheme('light')
      }
      const toggleThemeDark = () => {
        setTheme('dark');
      }
    return (
      <div className="Nav">
        <button onClick={toggleThemeLight}>Light</button>
        <button onClick={toggleThemeDark}>Dark</button>
      </div>
    );
  }
  
  export default Nav;