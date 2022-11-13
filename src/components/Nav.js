import React from "react";
import {useTheme} from "./hooks/useTheme";
import styles from "./styles/Nav.module.scss";
import {NavLink} from "react-router-dom";

function Nav() {
  const {theme, setTheme} = useTheme();

 const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

    return (
      <div className={styles.nav__wrap}>
        <div className={styles.nav}>
          <ul className={styles.nav__list}>
            <NavLink to='/cv/' exact className={styles.nav__list_link}>
              <li className={styles.nav__list_item}>Проекты</li>
            </NavLink>
            <NavLink to='/cv/summary' exact className={styles.nav__list_link}>
              <li className={styles.nav__list_item}>Резюме</li>
            </NavLink>
          </ul>
          <button onClick={toggleTheme} className={styles.nav__toggle_theme_btn}></button>
        </div>
      </div>
    );
  }
  
  export default Nav;